package com.appbit.shared.config;

import com.appbit.seguridad.filter.JwtAuthFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthFilter jwtAuthFilter;
    private final UserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults())
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**", "/error").permitAll()
                        .requestMatchers("/v3/api-docs/**", "/swagger-ui/**", "/swagger-ui.html").permitAll()

                        // Restricciones basadas en roles
                        // 1. Empresas: Creación/Edición/Eliminación solo para ENCARGADO / EMPRESA
                        .requestMatchers(HttpMethod.POST, "/api/empresas/**").hasAnyRole("EMPRESA", "ENCARGADO")
                        .requestMatchers(HttpMethod.PUT, "/api/empresas/**").hasAnyRole("EMPRESA", "ENCARGADO")
                        .requestMatchers(HttpMethod.DELETE, "/api/empresas/**").hasAnyRole("EMPRESA", "ENCARGADO")

                        // 2. Vacantes: Creación/Edición/Eliminación solo para ENCARGADO / EMPRESA
                        .requestMatchers(HttpMethod.POST, "/api/vacantes/**").hasAnyRole("EMPRESA", "ENCARGADO")
                        .requestMatchers(HttpMethod.PUT, "/api/vacantes/**").hasAnyRole("EMPRESA", "ENCARGADO")
                        .requestMatchers(HttpMethod.DELETE, "/api/vacantes/**").hasAnyRole("EMPRESA", "ENCARGADO")

                        // 3. Candidatos: Creación solo para CANDIDATO
                        .requestMatchers(HttpMethod.POST, "/api/candidatos/**").hasRole("CANDIDATO")

                        // 4. Postulaciones: Creación solo para CANDIDATO
                        .requestMatchers(HttpMethod.POST, "/api/postulaciones/**").hasRole("CANDIDATO")
                        
                        // 5. Postulaciones: Actualización de estado solo para ENCARGADO / EMPRESA
                        .requestMatchers(HttpMethod.PUT, "/api/postulaciones/*/estado").hasAnyRole("EMPRESA", "ENCARGADO")

                        // 6. Matching y Reportes ESG: solo para ENCARGADO / EMPRESA
                        .requestMatchers("/api/reportes/**").hasAnyRole("EMPRESA", "ENCARGADO")
                        .requestMatchers("/api/matching/**").hasAnyRole("EMPRESA", "ENCARGADO")

                        // Cualquier otra petición (ej. GETs para ver vacantes/empresas) requiere estar autenticado
                        .anyRequest().authenticated()
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authenticationProvider(authenticationProvider())
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
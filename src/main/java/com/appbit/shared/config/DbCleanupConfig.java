package com.appbit.shared.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
public class DbCleanupConfig {

    @Bean
    public CommandLineRunner cleanDatabase(JdbcTemplate jdbcTemplate) {
        return args -> {
            try {
                System.out.println("DB CLEANUP: Dropping duplicate/obsolete columns from candidates and companies...");
                jdbcTemplate.execute("ALTER TABLE usuarios ALTER COLUMN password DROP NOT NULL;");
                jdbcTemplate.execute("ALTER TABLE candidatos DROP COLUMN IF EXISTS email;");
                jdbcTemplate.execute("ALTER TABLE candidatos DROP COLUMN IF EXISTS nombre;");
                jdbcTemplate.execute("ALTER TABLE candidatos DROP COLUMN IF EXISTS password;");
                jdbcTemplate.execute("ALTER TABLE candidatos DROP COLUMN IF EXISTS activo;");

                jdbcTemplate.execute("ALTER TABLE empresas DROP COLUMN IF EXISTS email;");
                jdbcTemplate.execute("ALTER TABLE empresas DROP COLUMN IF EXISTS nombre;");
                jdbcTemplate.execute("ALTER TABLE empresas DROP COLUMN IF EXISTS password;");
                jdbcTemplate.execute("ALTER TABLE empresas DROP COLUMN IF EXISTS activo;");
                System.out.println("DB CLEANUP: Finished cleaning database columns successfully.");
            } catch (Exception e) {
                System.err.println("DB CLEANUP WARNING: Could not alter tables to drop duplicate columns: " + e.getMessage());
            }
        };
    }
}

import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import fondoImg from "../assets/fondo1.webp";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState("candidato"); // Simulación del srol para pruebas
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirigir según el rol ('srol') al formulario correspondiente
        if (role === "candidato") {
            navigate("/register-candidate");
        } else {
            navigate("/register-enterprise");
        }
    };

    return (
        <div
            className="min-h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${fondoImg})` }}
        >
            {/* Opcional: una capa oscura si la imagen es muy clara y necesitas contraste */}
            <div className="absolute inset-0 bg-primary/40"></div>

            <div className="w-[450px] bg-[#f2f4f5] flex flex-col py-16 px-10 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-black tracking-wider">APP-BIT</h1>
                    <p className="text-sm font-bold text-black mt-2">Bienvenido</p>
                </div>

                <form className="w-full" onSubmit={handleLogin}>
                    <div className="relative w-full mb-8">
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font placeholder-primary-50 focus:outline-none transition-colors"
                        >
                            <option value="candidato">Candidato (Simulación srol)</option>
                            <option value="empresa">Empresa (Simulación srol)</option>
                        </select>
                    </div>

                    <div className="relative w-full mb-8">
                        <input type="email"
                            placeholder="Ingresa tu correo electronico"
                            className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font placeholder-primary-50 focus:outline-none transition-colors" />
                    </div>
                    <div className="relative w-full mb-12">
                        <input type={showPassword ? "text" : "password"}
                            placeholder="Ingresa tu contraseña"
                            className="w-full bg-transparent border-b-[2px] border-primary py-2 pr-10 text-font placeholder-primary-50 focus:outline-none transition-colors" />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-primary cursor-pointer">
                            {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#285e8e] text-white text-sm font-semibold py-3 mb-6 hover:bg-[#1a4266] transition-colors duration-300">
                        Iniciar Sesión
                    </button>
                </form>

                <div className="text-center mt-2">
                    <p className="text-black text-sm">
                        ¿No tienes cuenta? <Link to="/registro" className="text-primary hover:underline transition-colors">Registrate aquí</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
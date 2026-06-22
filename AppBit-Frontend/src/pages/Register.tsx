import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import fondoImg from "../assets/fondo1.webp";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div
            className="min-h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${fondoImg})` }}
        >
            <div className="absolute inset-0 bg-primary/40"></div>

            <div className="w-[450px] bg-background flex flex-col py-16 px-10 relative z-10 gap-2">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-black tracking-wider">APP-BIT</h1>
                    <p className="text-sm font-bold text-black mt-2">Crea tu Cuenta</p>
                </div>

                <div className="relative mb-12">
                    <span className=" text-primary-50 absolute -top-6 left-0">Tipo de usuario</span>
                    <div className="flex gap-4 w-full">
                        <button className="flex-1 py-3 border border-primary-50 text-primary font-semibold text-sm transition-colors hover:bg-gray-50 cursor-pointer">
                            Candidato
                        </button>
                        <button className="flex-1 py-3 border border-primary-50 text-primary font-semibold text-sm transition-colors hover:bg-gray-50 cursor-pointer">
                            Empresa
                        </button>
                    </div>
                </div>

                <form className="w-full">
                    <div className="relative w-full mb-8">
                        <input type="email"
                            placeholder="Ingresa tu correo electronico"
                            className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font placeholder-primary-50 focus:outline-none transition-colors" />
                    </div>

                    <div className="relative w-full mb-8">
                        <input type={showPassword ? "text" : "password"}
                            placeholder="Ingresa tu contraseña"
                            className="w-full bg-transparent border-b-[2px] border-primary py-2 pr-10 text-font placeholder-primary-50 focus:outline-none transition-colors"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-primary cursor-pointer">
                            {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                        </button>
                    </div>

                    <div className="relative w-full mb-12">
                        <input type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirma tu Contraseña"
                            className="w-full bg-transparent border-b-[2px] border-primary py-2 pr-10 text-font placeholder-primary-50 focus:outline-none transition-colors"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-primary cursor-pointer">
                            {showConfirmPassword ? <FaEyeSlash /> : <FaRegEye />}
                        </button>
                    </div>

                    <button type="submit"
                        className="w-full bg-primary text-white text-sm font-semibold py-3 hover:bg-[#1a4266] transition-colors duration-300">
                        Crear Cuenta
                    </button>
                </form>
                <div className="text-center mt-2">
                    <p className="text-black text-sm">
                        ¿Ya tienes una cuenta? <Link to="/" className="text-primary hover:underline transition-colors">Inicia Sesión</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
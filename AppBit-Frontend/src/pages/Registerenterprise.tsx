import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fondoImg from "../assets/fondo1.webp";

const Registerenterprise = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para guardar los datos
        navigate("/dashboard");
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${fondoImg})` }}>

            {/* Panel Central Blanco (Formulario) */}
            <div className="w-full md:w-[70%] lg:w-[30%] bg-[#f2f4f5] flex flex-col items-center py-10 px-8 md:px-16 overflow-y-auto relative shadow-2xl">
                <div className="text-center mb-10 mt-6">
                    <h1 className="text-5xl font-extrabold text-font tracking-wider">APP-BIT</h1>
                    <p className="text-sm font-bold text-font mt-2">Registro de la Empresa</p>
                    {/* Indicador de paso */}
                    <div className="flex justify-center items-center mt-6 gap-2">
                        <div className={`h-2 w-8 rounded-full ${step >= 1 ? 'bg-[#127bb6]' : 'bg-gray-300'}`}></div>
                        <div className={`h-2 w-8 rounded-full ${step >= 2 ? 'bg-[#127bb6]' : 'bg-gray-300'}`}></div>
                        <div className={`h-2 w-8 rounded-full ${step >= 3 ? 'bg-[#127bb6]' : 'bg-gray-300'}`}></div>
                    </div>
                </div>

                <form className="w-full max-w-[500px]" onSubmit={handleSubmit}>
                    {/* Paso 1: Datos de la Persona a cargo */}
                    <div className={step === 1 ? "block" : "hidden"}>
                        <div className="mb-8">
                            <h2 className="text-lg font-bold text-font mb-4 pb-1">Datos de la Persona a cargo</h2>
                            <div className="space-y-4">
                                <div className="relative w-full">
                                    <input type="text" placeholder="Nombres Completos" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                </div>
                                <div className="relative w-full">
                                    <input type="text" placeholder="Identificación" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                </div>
                                <div className="relative w-full">
                                    <input type="text" placeholder="Rol" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paso 2: Datos Geográficos */}
                    <div className={step === 2 ? "block" : "hidden"}>
                        <div className="mb-8">
                            <h2 className="text-lg font-bold text-font mb-4 pb-1">Datos Geográficos</h2>
                            <div className="space-y-4">
                                <div className="relative w-full">
                                    <input type="text" placeholder="País de Residencia" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                </div>
                                <div className="relative w-full">
                                    <input type="text" placeholder="Ciudad de Residencia / Región" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative w-full">
                                        <input type="text" placeholder="Longitud" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                    </div>
                                    <div className="relative w-full">
                                        <input type="text" placeholder="Latitud" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paso 3: Datos de la Empresa */}
                    <div className={step === 3 ? "block" : "hidden"}>
                        <div className="mb-10">
                            <h2 className="text-lg font-bold text-font mb-4 pb-1">Datos de la Empresa</h2>
                            <div className="space-y-4">
                                <div className="relative w-full">
                                    <input type="text" placeholder="Tipo de Empresa" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                </div>
                                <div className="relative w-full">
                                    <input type="text" placeholder="Metas ESG" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Botones de Navegación */}
                    <div className="flex justify-between gap-4 mt-8">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="w-1/2 bg-gray-400 text-white text-sm font-semibold py-3 hover:bg-gray-500 transition-colors duration-300">
                                Atrás
                            </button>
                        )}
                        {step < 3 && (
                            <button
                                type="button"
                                onClick={nextStep}
                                className={`${step === 1 ? 'w-full' : 'w-1/2'} bg-primary text-white text-sm font-semibold py-3 hover:bg-[#0e5c8c] transition-colors duration-300`}>
                                Siguiente
                            </button>
                        )}
                        {step === 3 && (
                            <button
                                type="submit"
                                className="w-1/2 bg-[#285e8e] text-white text-sm font-semibold py-3 hover:bg-[#1a4266] transition-colors duration-300">
                                Guardar e Ingresar
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registerenterprise;
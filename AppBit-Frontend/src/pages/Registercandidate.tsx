import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fondoImg from "../assets/fondo1.webp";

const Registercandidate = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    // Estados para Skills y Habilidades
    const [skills, setSkills] = useState<string[]>([]);
    const [currentSkill, setCurrentSkill] = useState("");
    const [habilidades, setHabilidades] = useState<string[]>([]);
    const [currentHabilidad, setCurrentHabilidad] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para guardar los datos
        navigate("/home");
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    // Funciones para Skills
    const handleAddSkill = () => {
        if (currentSkill.trim() !== "") {
            setSkills([...skills, currentSkill.trim()]);
            setCurrentSkill("");
        }
    };

    const handleKeyDownSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddSkill();
        }
    };

    const handleRemoveSkill = (index: number) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    // Funciones para Habilidades
    const handleAddHabilidad = () => {
        if (currentHabilidad.trim() !== "") {
            setHabilidades([...habilidades, currentHabilidad.trim()]);
            setCurrentHabilidad("");
        }
    };

    const handleKeyDownHabilidad = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddHabilidad();
        }
    };

    const handleRemoveHabilidad = (index: number) => {
        setHabilidades(habilidades.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${fondoImg})` }}
        >

            {/* Panel Central Blanco (Formulario) */}
            <div className="w-full md:w-[70%] lg:w-[30%] bg-background flex flex-col items-center py-10 px-8 md:px-16 overflow-y-auto relative shadow-2xl">
                <div className="text-center mb-10 mt-6">
                    <h1 className="text-5xl font-extrabold text-font tracking-wider">APP-BIT</h1>
                    <p className="text-sm font-bold text-font mt-2">Registro de Candidato</p>
                    {/* Indicador de paso */}
                    <div className="flex justify-center items-center mt-6 gap-2">
                        <div className={`h-2 w-8 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-gray-300'}`}></div>
                        <div className={`h-2 w-8 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`}></div>
                        <div className={`h-2 w-8 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-gray-300'}`}></div>
                    </div>
                </div>

                <form className="w-full max-w-[500px]" onSubmit={handleSubmit}>
                    {/* Paso 1: Datos Personales */}
                    <div className={step === 1 ? "block" : "hidden"}>
                        <div className="mb-8">
                            <h2 className="text-lg font-bold text-font mb-4 pb-1">Datos Personales</h2>
                            <div className="space-y-4">
                                <div className="relative w-full">
                                    <input type="text" placeholder="Nombres Completos" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                </div>
                                <div className="relative w-full">
                                    <input type="text" placeholder="Número de Documento" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                </div>
                                <div className="relative w-full">
                                    <input type="text" placeholder="Grupo Subrepresentado" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
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

                    {/* Paso 3: Habilidades y Experiencia */}
                    <div className={step === 3 ? "block" : "hidden"}>
                        <div className="mb-10">
                            <h2 className="text-lg font-bold text-font mb-4 pb-1">Habilidades y Experiencia</h2>
                            <div className="space-y-4">
                                <div className="relative w-full">
                                    <input type="text" placeholder="Nivel" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                </div>

                                {/* Input para Skills */}
                                <div className="relative w-full">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Skills"
                                            value={currentSkill}
                                            onChange={(e) => setCurrentSkill(e.target.value)}
                                            onKeyDown={handleKeyDownSkill}
                                            className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleAddSkill}
                                            className="bg-primary text-white font-bold px-3 py-1 rounded hover:bg-primary-light transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                    {skills.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {skills.map((skill, index) => (
                                                <div key={index} className="bg-background text-primary px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 border border-primary-50">
                                                    <span>{skill}</span>
                                                    <button type="button" onClick={() => handleRemoveSkill(index)} className="text-primary hover:text-primary-dark">
                                                        &times;
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="relative w-full">
                                    <input type="number" placeholder="Años de Experiencia" className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors" />
                                </div>

                                {/* Input para Habilidades */}
                                <div className="relative w-full">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Habilidades"
                                            value={currentHabilidad}
                                            onChange={(e) => setCurrentHabilidad(e.target.value)}
                                            onKeyDown={handleKeyDownHabilidad}
                                            className="w-full bg-transparent border-b-[2px] border-primary py-2 text-font text-xs placeholder-primary-50 focus:outline-none transition-colors"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleAddHabilidad}
                                            className="bg-primary text-white font-bold px-3 py-1 rounded hover:bg-primary-light transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                    {habilidades.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {habilidades.map((hab, index) => (
                                                <div key={index} className="bg-background text-primary px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 border border-primary-50">
                                                    <span>{hab}</span>
                                                    <button type="button" onClick={() => handleRemoveHabilidad(index)} className="text-primary hover:text-primary-dark">
                                                        &times;
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
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
                                className={`${step === 1 ? 'w-full' : 'w-1/2'} bg-primary text-white text-sm font-semibold py-3 hover:bg-primary-light transition-colors duration-300`}>
                                Siguiente
                            </button>
                        )}
                        {step === 3 && (
                            <button
                                type="submit"
                                className="w-1/2 bg-primary text-white text-sm font-semibold py-3 hover:bg-primary-light transition-colors duration-300">
                                Guardar
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registercandidate;
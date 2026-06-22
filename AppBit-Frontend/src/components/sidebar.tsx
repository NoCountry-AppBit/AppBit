import { LuLayoutDashboard } from "react-icons/lu";
import { TbBriefcase, TbClipboardList } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import { IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface SidebarProps {
    role?: "empresa" | "candidato";
}

const Sidebar = ({ role = "candidato" }: SidebarProps) => {
    const isEmpresa = role === "empresa";

    return (
        <aside className="h-screen w-20 hover:w-64 group bg-secondary text-primary-50 flex flex-col justify-between transition-all duration-300 overflow-hidden py-6">
            <div>
                {/* User Profile Section (Top) */}
                <div className="flex flex-col items-center justify-center gap-2 group-hover:gap-4 px-4 transition-all duration-300 mb-8 mt-4">
                    <Link to="/profile">
                        <div className="w-10 h-10 group-hover:w-24 group-hover:h-24 bg-white rounded-full overflow-hidden flex items-center justify-center text-primary font-bold text-lg group-hover:text-4xl transition-all duration-300 shadow-lg">
                            <svg className="w-full h-full text-primary opacity-80 p-1 group-hover:p-2 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                    </Link>
                    <div className="hidden group-hover:flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden w-full">
                        <h4 className="font-bold text-lg leading-tight truncate w-full text-center">Bienvenido, Usuario</h4>
                        <span className="text-sm font-medium opacity-80 capitalize mt-1">{role}</span>
                    </div>
                </div>

                {/* Navigation Items */}
                <nav>
                    <ul className="flex flex-col gap-2 px-3 group-hover:px-4 transition-all duration-300">
                        {isEmpresa ? (
                            <>
                                <li className="flex flex-col group-hover:flex-row items-center group-hover:justify-start justify-center gap-1 group-hover:gap-4 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-300">
                                    <LuLayoutDashboard className="text-2xl min-w-[24px]" />
                                    <span className="text-[10px] group-hover:text-sm font-medium whitespace-nowrap transition-all duration-300"><Link to="/dashboard">Dashboard</Link></span>
                                </li>
                                <li className="flex flex-col group-hover:flex-row items-center group-hover:justify-start justify-center gap-1 group-hover:gap-4 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-300">
                                    <TbBriefcase className="text-2xl min-w-[24px]" />
                                    <span className="text-[10px] group-hover:text-sm font-medium whitespace-nowrap transition-all duration-300"><Link to="/Vacante">Vacante</Link></span>
                                </li>
                                <li className="flex flex-col group-hover:flex-row items-center group-hover:justify-start justify-center gap-1 group-hover:gap-4 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-300">
                                    <GiWorld className="text-2xl min-w-[24px]" />
                                    <span className="text-[10px] group-hover:text-sm font-medium whitespace-nowrap transition-all duration-300"><Link to="/ESG">ESG</Link></span>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="flex flex-col group-hover:flex-row items-center group-hover:justify-start justify-center gap-1 group-hover:gap-4 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-300">
                                    <IoHomeOutline className="text-2xl min-w-[24px]" />
                                    <span className="text-[10px] group-hover:text-sm font-medium whitespace-nowrap transition-all duration-300"> <Link to="/home">Inicio</Link></span>
                                </li>
                                <li className="flex flex-col group-hover:flex-row items-center group-hover:justify-start justify-center gap-1 group-hover:gap-4 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-300">
                                    <TbBriefcase className="text-2xl min-w-[24px]" />
                                    <span className="text-[10px] group-hover:text-sm font-medium whitespace-nowrap transition-all duration-300"> <Link to="/Ofertas">Ofertas</Link></span>
                                </li>
                                <li className="flex flex-col group-hover:flex-row items-center group-hover:justify-start justify-center gap-1 group-hover:gap-4 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-300">
                                    <TbClipboardList className="text-2xl min-w-[24px]" />
                                    <span className="text-[10px] group-hover:text-sm font-medium whitespace-nowrap transition-all duration-300"> <Link to="/Postulación">Postulación</Link></span>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>

            {/* Logout Section (Bottom) */}
            <div className="px-3 group-hover:px-4 transition-all duration-300">
                <button className="w-full flex flex-col group-hover:flex-row items-center group-hover:justify-start justify-center gap-1 group-hover:gap-4 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-300">
                    <IoLogOutOutline className="text-2xl min-w-[24px]" />
                    <span className="text-[10px] group-hover:text-sm font-medium whitespace-nowrap transition-all duration-300">Cerrar sesión</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
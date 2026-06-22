import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import DashboardLayout from "./layout/dashboard"
import Home from "./layout/home"
import Profile from "./pages/Profile"
import Registercandidate from "./pages/Registercandidate"
import Registerenterprise from "./pages/Registerenterprise"
import PageTitle from "./components/PageTitle"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><PageTitle title="Iniciar Sesión" /><Login /></>} />
        <Route path="/registro" element={<><PageTitle title="Registro" /><Register /></>} />
        <Route path="/home" element={<><PageTitle title="Inicio" /><Home /></>} />
        <Route path="/dashboard" element={<><PageTitle title="Dashboard" /><DashboardLayout /></>} />
        <Route path="/profile" element={<><PageTitle title="Perfil" /><Profile /></>} />
        <Route path="/register-candidate" element={<><PageTitle title="Completar Perfil Candidato" /><Registercandidate /></>} />
        <Route path="/register-enterprise" element={<><PageTitle title="Completar Perfil Empresa" /><Registerenterprise /></>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

import Asteroides from "./Asteroides"
import { Link } from "react-router-dom"
import fondo from "./assets/fondo_4.jpg"

function Menu() {
    return(
        <div
        style={{backgroundImage: `url(${fondo})` }}
        className="min-h-screen bg-cover bg-center flex flex-col items-start justify-start gap-4 p-12 text-white"
        >
            <h1 className="text-4xl font-bold text-center mb-2"> Bienvenido a la aventura espacial 🚀</h1>
            <div className="flex flex-row gap-4">
                <Link to="/asteroides" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
                Lista Asteroides 🪨
                </Link>
                <Link to="/metricas" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
                Métricas 📊
                </Link>
                <Link to="/ubicacion" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
                Ubicación 📍
                </Link>
            </div>
            
        </div>
    )
}

export default Menu
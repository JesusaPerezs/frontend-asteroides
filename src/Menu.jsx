import Asteroides from "./Asteroides"
import { Link } from "react-router-dom"

function Menu() {
    return(
        <div
        className="min-h-screen bg-black bg-cover bg-center flex flex-col items-start padding-top pt-20 gap-.5 p-7 text-white"
        >
            <h1
            style={{fontFamily: "'Exo 2', sans-serif"}}
            className="text-6xl font-bold tracking-wide"
            >
                SISTEMA DE <br /> DETECCIÓN DE <br /> ASTEROIDES
            </h1>
            <div className="flex flex-col gap-7 mt-[50px] ml-[20px]">
                <Link to="/asteroides" className="border border-white/50 px-6 py-3 rounded hover:bg-white/20 hover:text-white transition">
                Lista Asteroides
                </Link>
                <Link to="/metricas" className="border border-white/50 px-6 py-3 rounded hover:bg-white/20 hover:text-white transition">
                Métricas
                </Link>
                <Link to="/foto_dia" className="border border-white/50 px-6 py-3 rounded hover:bg-white/20 hover:text-white transition">
                Foto del día
                </Link>
            </div>
        </div>
    )
}

export default Menu
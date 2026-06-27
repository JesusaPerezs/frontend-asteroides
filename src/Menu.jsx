import Asteroides from "./Asteroides"
import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import * as THREE from "three"


function Menu() {
    const planeta = useRef()

    useEffect(() => {
    const escena = new THREE.Scene()
    const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camara.position.z = 5
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    planeta.current.appendChild(renderer.domElement)
    const geometria = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const planetaMesh = new THREE.Mesh(geometria, material)
    escena.add(planetaMesh)
    renderer.render(escena, camara)
}, [])

    return(
        <div ref={planeta} className="min-h-screen bg-black bg-cover">
            

            <div
            className="min-h-screen bg-black bg-cover bg-center flex flex-col items-start pt-20 gap-.5 p-7 text-white"
            >
                <h1
                style={{fontFamily: "'Exo 2', sans-serif"}}
                className="text-6xl font-bold tracking-wide"
                >
                    SISTEMA DE <br /> DETECCIÓN DE <br /> ASTEROIDES
                </h1>
                <div className="flex flex-col gap-7 mt-[50px] ml-[20px]">
                    <Link to="/asteroides" className="border border-cyan-400 shadow-lg shadow-cyan-500/30 px-5 py-4 rounded hover:bg-cyan-500/20 hover:shadow-cyan-200/10 tracking-widest uppercase text-sm hover:text-white transition">
                    Lista Asteroides
                    </Link>
                    <Link to="/metricas" className="border border-cyan-400 shadow-lg shadow-cyan-500/30 px-5 py-4 rounded hover:bg-cyan-500/20 hover:shadow-cyan-200/10 tracking-widest uppercase text-sm hover:text-white transition">
                    Métricas
                    </Link>
                    <Link to="/foto_dia" className="border border-cyan-400 shadow-lg shadow-cyan-500/30 px-5 py-4 rounded hover:bg-cyan-500/20 hover:shadow-cyan-200/10 tracking-widest uppercase text-sm hover:text-white transition">
                    Foto del día
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu
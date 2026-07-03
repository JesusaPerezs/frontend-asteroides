import Asteroides from "./Asteroides"
import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import * as THREE from "three"


function Menu() {
    const planeta = useRef()
    useEffect(() => {
    while (planeta.current.firstChild) planeta.current.removeChild(planeta.current.firstChild)
    const escena = new THREE.Scene()
    const textura = new THREE.TextureLoader().load("/tierra.jpg")
    const camara = new THREE.PerspectiveCamera(75, planeta.current.clientWidth / planeta.current.clientHeight, 0.1, 1000)
    camara.position.z = 1.9
    const luz = new THREE.DirectionalLight(0xffffff, 1)
    luz.position.set(5, 3, 5)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(planeta.current.clientWidth, planeta.current.clientHeight)
    const canvas = renderer.domElement
    planeta.current.appendChild(canvas)
    const geometria = new THREE.SphereGeometry(1, 64, 64)
    const material = new THREE.MeshStandardMaterial({ map: textura })
    const planetaMesh = new THREE.Mesh(geometria, material)
    escena.add(planetaMesh)
    escena.add(luz)
    const ancho = planeta.current.clientWidth
    planetaMesh.position.x = ancho < 768 ? 0.3 : 0.7
    planetaMesh.rotation.x = 0.4

    function manejarResize() {
        const ancho = planeta.current.clientWidth
        const alto = planeta.current.clientHeight
        renderer.setSize(ancho, alto)              // 1. nuevo tamaño del canvas
        camara.aspect = ancho / alto               // 2. nueva proporción de la cámara
        camara.updateProjectionMatrix()            // 3. ⬅️ la línea escondida
    }
    window.addEventListener("resize", manejarResize)

    function animar() {
        requestAnimationFrame(animar)   // "vuélveme a llamar en el próximo cuadro"
        planetaMesh.rotation.y += 0.002  // gira un pelín en el eje Y
        renderer.render(escena, camara) // repinta la escena
    }
    animar()

    return () => {
        renderer.dispose()
        window.removeEventListener("resize", manejarResize)
        if (planeta.current) {
            planeta.current.removeChild(canvas)
    }
}
}, [])

    return(
        <div className="min-h-screen bg-black bg-cover relative overflow-hidden">

            {/* 👇 div EXCLUSIVO para el canvas (vacío). El ref va aquí ahora */}
            <div ref={planeta} className="absolute inset-0 z-0" />

            {/* El menú va aparte, encima del canvas (z-10) y sin bg-black */}
            <div
            className="relative z-10 min-h-screen bg-cover bg-center flex flex-col items-start pt-20 gap-.5 p-7 text-white"
            >
                <h1
                style={{fontFamily: "'Exo 2', sans-serif"}}
                className="text-4xl md:text-6xl font-bold tracking-wide"
                >
                    SISTEMA DE <br /> DETECCIÓN DE <br /> ASTEROIDES
                </h1>
                <div className="flex flex-col gap-7 mt-[50px] ml-[20px]">
                    <Link to="/asteroides" className="border border-white shadow-lg px-5 py-4 rounded hover:bg-white/20 hover:text-white tracking-widest uppercase text-sm transition">
                    Lista Asteroides
                    </Link>
                    <Link to="/metricas" className="border border-white shadow-lg px-5 py-4 rounded hover:bg-white/20 hover:text-white tracking-widest uppercase text-sm transition">
                    Métricas
                    </Link>
                    <Link to="/foto_dia" className="border border-white shadow-lg px-5 py-4 rounded hover:bg-white/20 hover:text-white tracking-widest uppercase text-sm transition">
                    Foto del día
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu
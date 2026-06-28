import { useEffect, useRef } from "react"
import * as THREE from "three"

function Planeta(props) {
const planeta = useRef()
    useEffect(() => {
    while (planeta.current.firstChild) planeta.current.removeChild(planeta.current.firstChild)
    const escena = new THREE.Scene()
    const textura = new THREE.TextureLoader().load(props.textura)
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
        <div ref={planeta} className="w-full h-full"></div>
    )
}

export default Planeta
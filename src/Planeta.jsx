import { useEffect, useRef } from "react"
import * as THREE from "three"

function Planeta(props) {
const planeta = useRef()
    useEffect(() => {
    while (planeta.current.firstChild) planeta.current.removeChild(planeta.current.firstChild)
    const escena = new THREE.Scene()
    const textura = new THREE.TextureLoader().load(props.textura)
    const camara = new THREE.PerspectiveCamera(75, planeta.current.clientWidth / planeta.current.clientHeight, 0.1, 1000)
    camara.position.z = props.zoom || 1.9
    const luz = new THREE.DirectionalLight(0xffffff, 1)
    luz.position.set(5, 3, 5)
    const renderer = new THREE.WebGLRenderer({ alpha: true})
    renderer.setSize(planeta.current.clientWidth, planeta.current.clientHeight)
    const canvas = renderer.domElement
    planeta.current.appendChild(canvas)
    const geometria = new THREE.SphereGeometry(1, 64, 64)
    const material = new THREE.MeshStandardMaterial({ map: textura })
    const planetaMesh = new THREE.Mesh(geometria, material)
    escena.add(planetaMesh) 
    escena.add(luz)
    const ancho = planeta.current.clientWidth
    planetaMesh.position.x = props.posX ?? (ancho < 768 ? 0.3 : 0.7)
    planetaMesh.position.y = props.posY || 0
    if (props.anillo) {
        const texturaAnillo = new THREE.TextureLoader().load(props.anillo)
        const geometriaAnillo = new THREE.RingGeometry(1.1, 2.1, 64)   // ⬅️ interno más grande
        const materialAnillo = new THREE.MeshBasicMaterial({ map: texturaAnillo, side: THREE.DoubleSide, transparent: true })
        const anilloMesh = new THREE.Mesh(geometriaAnillo, materialAnillo)
        anilloMesh.rotation.x = Math.PI / 2.2
        anilloMesh.position.x = planetaMesh.position.x   // ⬅️ misma posición que el planeta
        anilloMesh.position.y = planetaMesh.position.y
        escena.add(anilloMesh)
}
    if (props.ubicacion_iss) {
        const canvas = document.createElement("canvas")
        canvas.width = 64
        canvas.height = 64
        const ctx = canvas.getContext("2d")
        ctx.font = "38px serif"
        ctx.fillText("🛰️", 0, 48)
        const texturaISS = new THREE.CanvasTexture(canvas)
        const materialesISS = new THREE.SpriteMaterial({ map: texturaISS, transparent: true })
        const issSprite = new THREE.Sprite(materialesISS)
        issSprite.scale.set(0.3, 0.3, 1)
        issSprite.position.set(
            props.ubicacion_iss.x, 
            props.ubicacion_iss.y, 
            props.ubicacion_iss.z)
        console.log("posición ISS:", issSprite.position)
        planetaMesh.add(issSprite)
}

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
}, [props.ubicacion_iss])

    return(
        <div ref={planeta} className="w-full h-full"></div>
    )
}

export default Planeta
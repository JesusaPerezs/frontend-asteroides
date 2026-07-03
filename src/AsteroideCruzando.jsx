import { useEffect, useRef } from "react"
import * as THREE from "three"

function AsteroideCruzando() {
    const contenedor = useRef()
    useEffect(() => {
        const escena = new THREE.Scene()
        const camara = new THREE.PerspectiveCamera(75, contenedor.current.clientWidth / contenedor.current.clientHeight, 0.1, 1000)
        camara.position.z = 5
        const luz = new THREE.DirectionalLight(0xffffff, 1)
        luz.position.set(5,3,5)
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(contenedor.current.clientWidth, contenedor.current.clientHeight)
        contenedor.current.appendChild(renderer.domElement)

        const geometria = new THREE.IcosahedronGeometry(2, 0)
        const material = new THREE.MeshStandardMaterial({ color: 0x888888, flatShading: true })
        const asteroide = new THREE.Mesh(geometria, material)
        asteroide.position.x = -2
        asteroide.position.y = -7
        escena.add(asteroide)
        escena.add(luz)

        function animar() {
            requestAnimationFrame(animar)
            asteroide.position.x += 0.02
            asteroide.position.y += 0.03
            asteroide.rotation.y += 0.03
            if (asteroide.position.x > 5) {
                asteroide.position.x = -5
                asteroide.position.y = -5
            }
            renderer.render(escena, camara)
        }
        animar()

        return() => renderer.dispose()
    }, [])

    return <div ref={contenedor} className="w-full h-full" />
}

export default AsteroideCruzando
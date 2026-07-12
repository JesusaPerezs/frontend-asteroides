import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Planeta from "./Planeta"

function ISS() {
    useEffect(() => {
    fetch("https://asteroides-api-979143368634.europe-west1.run.app/iss")
      .then(res => res.json())
      .then(datos => {
        setISS(datos)
        setCargando(false)
  })
  }, [])

  const [estrellas, setEstrellas] = useState([])

useEffect(() => {
    const nuevasEstrellas = Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 0.5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 4,
    }))
    setEstrellas(nuevasEstrellas)
    }, [])

  const [iss, setISS] = useState(null)
  const longitude = iss?.iss_position?.longitude
  const latitud = iss?.iss_position?.latitude
  const [cargando, setCargando] = useState(true)

  return (
    <div className="min-h-screen bg-black bg-cover text-white p-8 relative overflow-hidden">
        <div className="relative z-10">
            <div className="absolute inset-0 z-0 overflow-hidden">
                {estrellas.map(e => (
                    <div
                    key={e.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: `${e.size}px`,
                        height: `${e.size}px`,
                        left: `${e.left}%`,
                        top: `${e.top}%`,
                        animation: `twinkle ${e.duration}s ease-in-out infinite`,
                        animationDelay: `${e.delay}s`,
                    }}
                    />
                ))}
            </div>
            <h1
            style={{fontFamily: "'Exo 2', sans-serif"}}
            className="text-6xl font-bold tracking-wide text-center mb-8"
            >
                Estacion Espacial Internacional
            </h1>
            {cargando
            ?<p className="text-center text-xl"> Cargando... 🌀</p>
            : <div className="text-center text-xl">
                <div style={{height: "900px"}} className="relative inset-0 z-20">
                    <Planeta textura="/tierra_noche_2.jpg" zoom={2.3} posX={0.6} posY={0.5} />
                </div>
            </div>
            }</div>
    </div>
)
}

export default ISS
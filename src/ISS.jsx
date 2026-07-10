import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"


function ISS() {
    useEffect(() => {
    fetch("https://asteroides-api-979143368634.europe-west1.run.app/iss")
      .then(res => res.json())
      .then(datos => {
        setISS(datos)
        setCargando(false)
  })
  }, [])

  const [iss, setISS] = useState(null)
  const longitude = iss?.iss_position?.longitude
  const latitud = iss?.iss_position?.latitude
  const [cargando, setCargando] = useState(true)


  return (
    <div className="min-h-screen bg-black bg-cover text-white p-8 relative overflow-hidden">
        <div className="relative z-10">
            <h1
            style={{fontFamily: "'Exo 2', sans-serif"}}
            className="text-6xl font-bold tracking-wide text-center mb-8"
            >
                Estacion Espacial Internacional
            </h1>
            {cargando
            ?<p className="text-center text-xl"> Cargando... 🌀</p>
            : <div className="text-center text-xl">
                <MapContainer center={[latitud, longitude]} zoom={3} style={{ height: "500px" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[latitud, longitude]}>
                        <Popup>Aquí está la ISS 🛰️</Popup>
                    </Marker>
                </MapContainer>
            </div>
            }</div>
    </div>
)
}

export default ISS
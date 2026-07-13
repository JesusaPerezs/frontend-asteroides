import { useState, useEffect } from "react"
import Planeta from "./Planeta"

function Metricas() {
  const [asteroides, setAsteroides] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch("https://asteroides-api-979143368634.europe-west1.run.app/asteroides")
      .then(res => res.json())
      .then(datos => {
        setAsteroides(datos.asteroides)
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
  
  const masRapido = [...asteroides].sort((a,b) => b.velocidad_km_hours - a.velocidad_km_hours)[0]
  const masGrande = [...asteroides].sort((a,b) => b.tamaño_km - a.tamaño_km)[0]
  const masCercano = [...asteroides].sort((a, b) => a.distancia_mayor_proximidad - b.distancia_mayor_proximidad)[0]
  const peligroso = asteroides.filter(ast => ast.peligroso === true).length

  return (
    <div className="min-h-screen bg-black bg-cover text-white p-8 relative overflow-hidden">
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
        {/* Júpiter de fondo */}
        <div className="absolute inset-0 z-0">
            <Planeta textura="/jupiter.jpg" />
        </div>

        {/* Todo el contenido de métricas, encima */}
        <div className="relative z-10">
            <h1 
            style={{fontFamily: "'Exo 2', sans-serif"}}
            className="text-6xl font-bold tracking-wide text-center mb-8"
            >
              METRICAS
            </h1>

            {cargando
            ? <p className="text-center text-xl">Cargando... 🌀</p>
            : <div>
            <p className="text-center text-gray-400 mb-5 text-xl">
              {asteroides.length} asteroides detectados 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-blue-900/20 rounded-xl p-9">
                  <p className="text-lg text-gray-400">⚡ Más rápido</p>
                  <p className="text-2xl font-bold text-blue-400">{masRapido?.nombre}</p>
                  <p className="text-gray-300">{Math.round(masRapido?.velocidad_km_hours).toLocaleString('en-US')} km/h</p>
              </div>
              <div className="bg-blue-900/20 rounded-xl p-9">
                  <p className="text-lg text-gray-400">🪨 Más grande</p>
                  <p className="text-2xl font-bold text-blue-400">{masGrande?.nombre}</p>
                  <p className="text-gray-300">{masGrande?.tamaño_km} km</p>
              </div>
              <div className="bg-blue-900/20 rounded-xl p-9">
                <p className="text-lg text-gray-400">🎯 Más cercano</p>
                <p className="text-2xl font-bold text-blue-400">{masCercano?.nombre}</p>
                <p className="text-gray-300">{Math.round(masCercano?.distancia_mayor_proximidad).toLocaleString('en-US')} km</p>
              </div>
              <div className="bg-blue-900/20 rounded-xl p-9">
                <p className="text-lg text-gray-400">⚠️ Más peligroso</p>
                <p className="text-2xl font-bold text-blue-400">{peligroso}</p>
                <p className="text-gray-300">de {asteroides.length} detectados</p>
              </div>
            </div>
          </div>
          }
        </div>
      </div>  
      )
      }
      

export default Metricas
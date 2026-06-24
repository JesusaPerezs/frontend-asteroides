import { useState, useEffect } from "react"

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
  
  const masRapido = [...asteroides].sort((a,b) => b.velocidad_km_hours - a.velocidad_km_hours)[0]
  const masGrande = [...asteroides].sort((a,b) => b.tamaño_km - a.tamaño_km)[0]
  const masCercano = [...asteroides].sort((a, b) => a.distancia_mayor_proximidad - b.distancia_mayor_proximidad)[0]
  const peligroso = asteroides.filter(ast => ast.peligroso === true).length

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Métricas 📊</h1>
      {cargando
      ? <p className="text-center text-xl">Cargando... 🌀</p>
      : <div>
      <p className="text-center text-gray-400 mb-10 text-xl">
        {asteroides.length} asteroides detectados 
      </p>
      <div className="max-w-md mx-auto space-y-4">
        <div className="bg-gray-800 rounded-xl p-6">
            <p className="text-lg text-gray-400">⚡ Más rápido</p>
            <p className="text-2xl font-bold text-blue-400">{masRapido?.nombre}</p>
            <p className="text-gray-300">{Math.round(masRapido?.velocidad_km_hours).toLocaleString('en-US')} km/h</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
            <p className="text-lg text-gray-400">🪨 Más grande</p>
            <p className="text-2xl font-bold text-blue-400">{masGrande?.nombre}</p>
            <p className="text-gray-300">{masGrande?.tamaño_km} km</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <p className="text-lg text-gray-400">🎯 Más cercano</p>
          <p className="text-2xl font-bold text-blue-400">{masCercano?.nombre}</p>
          <p className="text-gray-300">{Math.round(masCercano?.distancia_mayor_proximidad).toLocaleString('en-US')} km</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <p className="text-lg text-gray-400">⚠️ Más peligroso</p>
          <p className="text-2xl font-bold text-blue-400">{peligroso}</p>
          <p className="text-gray-300">de {asteroides.length} detectados</p>
        </div>
      </div>
    </div>
    }
  </div>
)
}

export default Metricas
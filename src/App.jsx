import { useState, useEffect } from "react"

function App() {
  const [asteroides, setAsteroides] = useState([])

  useEffect(() => {
    fetch("https://asteroides-api-979143368634.europe-west1.run.app/asteroides")
      .then(res => res.json())
      .then(datos => setAsteroides(datos.asteroides))
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-2">
        Tracker de Asteroides 🚀
      </h1>
      <p className="text-center text-gray-400 mb-8">
        {asteroides.length} asteroides detectados
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {asteroides.map(ast => (
          <div key={ast.id} className="bg-gray-800 rounded-xl p-5 border border-gray-700">
            <h3 className="text-lg font-bold text-blue-400">{ast.nombre}</h3>
            <p className="text-gray-300 text-sm mt-1">📏 {ast.tamaño_km} km</p>
            <p className="text-gray-300 text-sm">📅 {ast.fecha_deteccion}</p>
            <p className="mt-2">
              {ast.peligroso
                ? <span className="text-red-400 font-bold">⚠️ Peligroso</span>
                : <span className="text-green-400">✅ Seguro</span>
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
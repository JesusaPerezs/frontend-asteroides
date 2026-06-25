import { useState, useEffect } from "react"
// useState - guarda datos que cambian. Ej: la lista de asteroides. 
// useEffect → ejecuta algo en un momento dado. Ej: traer los datos al cargar la página. 

function Asteroides() { // define tu componente
  const [asteroides, setAsteroides] = useState([]) // const = variable
  // asteroides ← agarra la 1ª cosa (los datos)
  // setAsteroides ← agarra la 2ª (la función para cambiarlos)
  const [cargando, setCargando] = useState(true)

  useEffect(() => { // "ejecuta esto una vez al cargar". El [] del final es lo que dice "solo una vez".
    fetch("https://asteroides-api-979143368634.europe-west1.run.app/asteroides") // llama a tu API en Cloud Run
      .then(res => res.json()) // convierte la respuesta a JSON (formato que JS entiende).
      // usa el plumón para escribir los asteroides en la pizarra.
      .then(datos => {
        setAsteroides(datos.asteroides)
        setCargando(false)
        })
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-8 text-center"> 
      <h1 
      style={{fontFamily: "'Exo 2', sans-serif"}}
      className="text-6xl font-bold tracking-wide mb-16"
      >
        ASTEROIDES DETECTADOS
      </h1>

      {cargando
      ? <p className="text-center text-xl">Cargando... 🌀</p>
      : <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {[...asteroides]
          .sort((a, b) => b.fecha_deteccion.localeCompare(a.fecha_deteccion))
          .map(ast => (
            <div key={ast.id} className="bg-gray-800 rounded-xl p-5 border border-gray-700 mt-[5px]"> 
              <h3 className="text-lg font-bold text-blue-400">{ast.nombre}</h3>
              <p className="text-gray-300 text-sm mt-1">📏 Tamaño: {ast.tamaño_km} km</p>
              <p className="text-gray-300 text-sm">📅 Detección: {ast.fecha_deteccion}</p>
              <p className="text-gray-300 text-sm">⚡ Velocidad: {Math.round(ast.velocidad_km_hours).toLocaleString('en-US')} km/h</p>
              <p className="text-gray-300 text-sm">🛰️ Distancia: {Math.round(ast.distancia_mayor_proximidad).toLocaleString('en-US')} km</p>
              <p className="text-gray-300 text-sm">✨ Magnitud: {ast.magnitud}</p>
              <p className="text-gray-300 text-sm">📅 Mayor cercanía: {ast.fecha_mayor_proximidad }</p>
              <p className="mt-2">
                {ast.peligroso
                  ? <span className="text-red-400 font-bold">⚠️ Peligroso</span>
                  : <span className="text-green-400">✅ Seguro</span>
                }
              </p>
              <a className="text-blue-400 underline" href={ast.nasa_url} target="_blank">Ver en Nasa 🛰️</a>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Asteroides
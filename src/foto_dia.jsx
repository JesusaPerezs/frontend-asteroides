import { useState, useEffect } from "react"

function FotoDia() {
  const [foto, setFoto] = useState({})

  useEffect(() => {
    fetch("https://asteroides-api-979143368634.europe-west1.run.app/foto")
      .then(res => res.json())
      .then(datos => setFoto(datos))
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Foto del día 🖼️</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-gray-800 rounded-xl p-6">
          {foto?.media_type === "image"
          ? <img src={foto?.link} />
          : <a href={foto?.link}>Ver video 🎬</a>}
        </div>
        <div className="flex flex-col space-y-4 gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <p className="text-lg text-gray-400">Fecha</p>
            <p className="text-2xl font-bold text-blue-400">{foto?.fecha}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <p className="text-lg text-gray-400">Descripción</p>
            <p className="text-base font-semibold text-blue-400">{foto?.explicacion}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FotoDia
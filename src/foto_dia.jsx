import { useState, useEffect } from "react"

function FotoDia() {
  const [foto, setFoto] = useState({})
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch("https://asteroides-api-979143368634.europe-west1.run.app/foto")
      .then(res => res.json())
      .then(datos => {
        setFoto(datos)
        setCargando(false)
})
  }, [])

  return (
    <div className="min-h-screen bg-black bg-cover text-white p-8">
      <h1 
      style={{fontFamily: "'Exo 2', sans-serif"}}
      className="text-6xl font-bold tracking-wide text-center mb-8"
      >
        FOTO DEL DIA
      </h1>

      {cargando
      ? <p className="text-center text-xl">Cargando... 🌀</p>
      :<div className="flex flex-col md:flex-row gap-[200px]">
        <div className="flex flex-col justify-center items-center md:w-1/3 bg-gray-800 rounded-xl p-9">
          {foto?.media_type === "image"
          ? <img src={foto?.link} className="w-full h-auto rounded-xl"/>
          : <a href={foto?.link}>Ver video 🎬</a>}
        </div>
        <div className="md:w-2/3 flex flex-col space-y-4 gap-4">
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
      }
    </div>
  )
}

export default FotoDia
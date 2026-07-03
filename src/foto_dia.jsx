import { useState, useEffect } from "react"
import Planeta from "./Planeta"

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
    <div className="min-h-screen bg-black bg-cover text-white p-8 relative overflow-hidden">

        {/* Saturno de fondo */}
        <div className="absolute inset-0 z-0">
            <Planeta textura="/saturn.jpg" anillo="/saturn_ring.png" zoom={3} posX={1} posY={-0.6} />
        </div>


        <div className="relative z-10">
          <h1 
          style={{fontFamily: "'Exo 2', sans-serif"}}
          className="text-6xl font-bold tracking-wide text-center mb-8"
          >
            FOTO DEL DIA
          </h1>

          {cargando
          ? <p className="text-center text-xl">Cargando... 🌀</p>
          :<div className="flex flex-col md:flex-row gap-[210px]">
            <div className="flex flex-col justify-center items-center md:w-1/2 bg-gray-900/40 rounded-xl p-9">
              {foto?.media_type === "image"
              ? <img src={foto?.link} className="w-full h-auto rounded-xl"/>
              : <a href={foto?.link}>Ver video 🎬</a>}
            </div>
            <div className="md:w-1/2 flex flex-col space-y-4 gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <p className="text-lg text-gray-00">Fecha</p>
                <p className="text-2xl font-bold text-blue-400">{foto?.fecha}</p>
              </div>
              <div className="bg-gray-800/70 rounded-xl p-6">
                <p className="text-lg text-gray-400">Descripción</p>
                <p className="text-base font-bold text-blue-400">{foto?.explicacion}</p>
              </div>
            </div>
          </div>
          }
        </div>
      
    </div>      
  )
    }

export default FotoDia
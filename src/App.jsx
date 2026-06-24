// BrowserRouter → activa la navegación en toda la app (el "edificio")
// Routes → contenedor que agrupa todas las rutas
// Route → una ruta individual: conecta una URL con una pantalla
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./Menu"
import Asteroides from "./Asteroides"
import Metricas from "./Metricas"
import FotoDia from "./foto_dia"

function App() {
  return (
    <BrowserRouter> {/* envuelve todo: prende el sistema de rutas */}
      <Routes>      {/* aquí viven todas las puertas */}
        {/* path = la URL | element = qué pantalla mostrar */}
        <Route path="/" element={<Menu />} />
        <Route path="/asteroides" element={<Asteroides />} />
        <Route path="/metricas" element={<Metricas />} />
        <Route path="/foto_dia" element={<FotoDia />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
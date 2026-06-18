// BrowserRouter → activa la navegación en toda la app (el "edificio")
// Routes → contenedor que agrupa todas las rutas
// Route → una ruta individual: conecta una URL con una pantalla
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./Menu"
import Asteroides from "./Asteroides"

function App() {
  return (
    <BrowserRouter> {/* envuelve todo: prende el sistema de rutas */}
      <Routes>      {/* aquí viven todas las puertas */}
        {/* path = la URL | element = qué pantalla mostrar */}
        <Route path="/" element={<Menu />} />
        <Route path="/asteroides" element={<Asteroides />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
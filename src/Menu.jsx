import Asteroides from "./Asteroides"
import { Link } from "react-router-dom"

function Menu() {
    return(
        <div>
            <h1 className="text-4xl font-bold text-center mb-2">
        Bienvenido a la aventura espacial 🚀
        </h1>
        <Link to="/asteroides">Ver asteroides 🪨</Link>
        </div>
    )
}

export default Menu
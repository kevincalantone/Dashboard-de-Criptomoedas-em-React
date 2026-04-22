// O menu de navegação.
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to={"/"} className="nav-logo">CriptoDash</Link>
        <div className="nav-links">
          <Link to={"/"}>Inicio</Link>
          <Link to={"/favorites"}>Meus Favoritos</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
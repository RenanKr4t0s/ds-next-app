import NavItemMaker from "./navBarComp/naItemMaker"
import navArray from "./navBarComp/navArray"
import logo from "../assets/dsLogo.jpg"

export default function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg custom_fancy-text">
      <div className="container-fluid">
        <a className="d-flex flex-row btn btn-outline-warning custom_bg-primaria" href="/">
            <img className="" src={logo} alt='DSPresentes' width="50" height="50" />
            <p className="mt-1 h1">Ds Presentes</p>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
        aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse justify-content-end navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <NavItemMaker navItens={navArray}/>
          </ul>
        </div>
      </div>
    </nav>
  )
}
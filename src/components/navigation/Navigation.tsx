import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [date, setDate] = useState<string>("")
  useEffect(() => {
    const date = new Date()
    const dateNow =`[ ${date.getDate()}/${date.getFullYear()} ]`
    setDate(dateNow)
  },[])

  type PropsStyles = {
    isActive:boolean
  }

  const styleNavLink = ({isActive}:PropsStyles):string => isActive ? "nav-link text-primary" : "nav-link";
  
  
    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{date}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={styleNavLink} to="ventas">Ventas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={styleNavLink} to="productos">Productos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={styleNavLink} to="inventario">Inventario</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={styleNavLink} to="historial">Historial</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navigation;
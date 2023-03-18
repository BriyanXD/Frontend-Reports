import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Navigation.module.css"

const Navigation = () => {

  const {loginWithRedirect, isAuthenticated, logout, user} = useAuth0()

  const [date, setDate] = useState<string>("")
  useEffect(() => {
    const date = new Date()
    const dateNow =`[ ${date.getDay()} / ${date.getDate()} / ${date.getFullYear()} ]`
    setDate(dateNow)
  },[])

  type PropsStyles = {
    isActive:boolean
  }

  useEffect(() => {
    if(!window.localStorage.getItem("user") || window.localStorage.getItem("user") === "undefined"){
      window.localStorage.setItem("user",JSON.stringify(user))
    }
  },[user]) 


  const styleNavLink = ({isActive}:PropsStyles):string => isActive ? "nav-link text-primary" : "nav-link";
  
  
    return(
      <nav className={`navbar navbar-expand-lg ${styles.navcontainer}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{date}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {isAuthenticated &&
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
            <button className="btn btn-outline-primary">Generar reporte</button>  
              </li>
            </ul>
          </div>}
          <div>
          </div>
          {!isAuthenticated ? <button className="btn btn-outline-success" onClick={() => loginWithRedirect()}>Login</button>:
            <button className="btn btn-outline-success" onClick={() =>{
              logout()
              window.localStorage.setItem("user",JSON.stringify(undefined));
            }}>{user?.given_name}</button>
          }
        </div>
      </nav>
    )
}
export default Navigation;
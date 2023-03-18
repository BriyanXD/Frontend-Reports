import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

interface TypeProps {
    children: JSX.Element | JSX.Element[]
}

export default function Protected({children}:TypeProps) {

    const [isAuth, setAuth] = useState<string | null>(null);
    const {user, loginWithRedirect} = useAuth0()

    useEffect(() => {
        if(window.localStorage.getItem("user") !== "undefined" && !user){
            loginWithRedirect();
        }
        if(window.localStorage.getItem("user") && user){
            setAuth(window.localStorage.getItem("user"))
        }
    },[isAuth])

    if( !isAuth ) return <Navigate to="/"/> 
    return <>{children}</>
}

import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

interface TypeProps {
    children: JSX.Element | JSX.Element[]
}

export default function Protected({children}:TypeProps) {

    const [isAuth, setAuth] = useState<string | null>(null);
    const {user} = useAuth0()

    useEffect(() => {
        setAuth(window.localStorage.getItem("user"));
    },[user])

    if( !isAuth ) return <Navigate to="/"/> 
    return <>{children}</>
}

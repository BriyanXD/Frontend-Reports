import { useAuth0 } from "@auth0/auth0-react"
import { Navigate } from "react-router-dom"

interface TypeProps {
    children: JSX.Element | JSX.Element[]
}

export default function Protected({children}:TypeProps) {

    const {isAuthenticated, user} = useAuth0()

    if(!isAuthenticated && !user) return <Navigate to="/"/> 
    return <>{children}</>
}

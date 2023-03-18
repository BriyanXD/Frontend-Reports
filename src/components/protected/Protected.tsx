import { Navigate } from "react-router-dom"

interface TypeProps {
    children: JSX.Element | JSX.Element[]
}

export default function Protected({children}:TypeProps) {


    if(false) return <Navigate to="/"/> 
    return <>{children}</>
}

import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

interface TypeProps {
    children: JSX.Element | JSX.Element[]
}

export default function Protected({children}:TypeProps) {

    const {user} = useAuth0()

    if(!user) return <Navigate to="/"/> 
    return <>{children}</>
}

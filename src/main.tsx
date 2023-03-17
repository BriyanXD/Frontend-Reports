import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


const {VITE_AUTH0_DOMAIN, VITE_CLIENTEID} =import.meta.env

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(



  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

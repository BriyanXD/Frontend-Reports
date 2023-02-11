import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navigation from './components/navigation/Navigation'
import ContainerProduct from './components/products/containerProduct/ContainerProduct'
import { ProductProvider } from './context/product/ProductProvider'
import ToolProduct from './components/products/toolsProduct/ToolsProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation/>
    <ProductProvider>
    <Routes>
        <Route path='/' element={
          <>
            <h1>Home</h1>
          </>
        }/>
        <Route path='productos' element={
          <>
            <ToolProduct/>
            <ContainerProduct/>
          </>
        }/>
        <Route path='ventas' element={
          <>
            <h1>Ventas</h1>
          </>
        }/>
        <Route path='*' element={
          <>
            <h1>Error la ruta no existe</h1>
          </>
        }/>
    </Routes>
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

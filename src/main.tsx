import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navigation from './components/navigation/Navigation'
import ContainerProduct from './components/products/containerProduct/ContainerProduct'
import { ProductProvider } from './context/product/ProductProvider'
import ToolProduct from './components/products/toolsProduct/ToolsProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContainerSale from './components/sales/ContainerSale/ContainerSale'
import ToolSale from './components/sales/ToolsSale/ToolSale'
import { SaleProvider } from './context/sale/SaleProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation/>
    <ProductProvider>
    <SaleProvider>

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
            <ToolSale/>
            <ContainerSale/>
          </>
        }/>
        <Route path='*' element={
          <>
            <h1>Error la ruta no existe</h1>
          </>
        }/>
    </Routes>
    </SaleProvider>
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

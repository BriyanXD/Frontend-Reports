import './index.css'
import Navigation from './components/navigation/Navigation'
import ContainerProduct from './components/products/containerProduct/ContainerProduct'
import { ProductProvider } from './context/product/ProductProvider'
import ToolProduct from './components/products/toolsProduct/ToolsProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContainerSale from './components/sales/ContainerSale/ContainerSale'
import ToolSale from './components/sales/ToolsSale/ToolSale'
import { SaleProvider } from './context/sale/SaleProvider'
import Home from './components/home/Home'
import { ContainerInventory } from './components/inventory/ContainerInvetory/ContainerInvetory'
import { InventoryProvider } from './context/inventory/InventoryProvider'
import ToolInventory from './components/inventory/ToolsInvetory/ToolsInventory'
import { Auth0Provider } from '@auth0/auth0-react'
import Protected from './components/protected/Protected'


const {VITE_AUTH0_DOMAIN, VITE_CLIENTEID} =import.meta.env

export default function App() {


  return (
    
    <Auth0Provider 
    domain={VITE_AUTH0_DOMAIN}
    clientId={VITE_CLIENTEID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>

    <BrowserRouter>
    <ProductProvider>
    <SaleProvider>
    <InventoryProvider>
      <Navigation/>
      
    <Routes>
        <Route path='/' element={
          <>
            <Home/>
          </>
        }/>
        <Route path='productos' element={
          <Protected>
          <ToolProduct/>
            <ContainerProduct/>
          </Protected>
        }/>
        <Route path='ventas' element={
          <Protected>
            <ToolSale/>
            <ContainerSale/>
          </Protected>
        }/>
        <Route path='inventario' element={
          <Protected>
            <ToolInventory/>
            <ContainerInventory/>
          </Protected>
        }
        
        />
        <Route path='*' element={
          <>
            <h1>Error la ruta no existe</h1>
          </>
        }/>
    </Routes>
    </InventoryProvider>
    </SaleProvider>
    </ProductProvider>
    </BrowserRouter>
    </Auth0Provider>
  )
}

import { useReducer } from "react"
import { getSales } from "../../services/sale/getSales"
import SaleContext from "./SaleContext"
import { SaleReducer } from "./SaleReducer"
import { NSale, Product, Sale, SaleState } from "../../../types"
import { postSale } from "../../services/sale/postSale"

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE:SaleState = {
    sales:[],
    newSaleCreated:null,
    product:null
}

export const SaleProvider = ({children}:ProviderProps) => {


    const [saleState, dispatch] = useReducer(SaleReducer, INITIAL_STATE)

    const getAllSales = () => {
        getSales()
        .then(response => dispatch({type:"GET_ALL_SALES", payload: response}))
    }

    const postNewSale = (sale:NSale) => {
        postSale(sale)
        .then(response => dispatch({type:"POST_NEW_SALE",payload:response}))
    }

    const setProductId = (product:Product) => dispatch({type:"SET_PRODUCT_ID",payload:product}) 


    return(
        <SaleContext.Provider value={{saleState, getAllSales,postNewSale,setProductId}}>
            {children}
        </SaleContext.Provider>
    )
}
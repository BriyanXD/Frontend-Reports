import { useContext, useReducer } from "react"
import { getSaleByData, getSales, PropsGetSale } from "../../services/sale/getSales"
import SaleContext from "./SaleContext"
import { SaleReducer } from "./SaleReducer"
import { NSale, Product, Sale, SaleState } from "../../../types"
import { postSale } from "../../services/sale/postSale"
import { ProductContext } from "../product/ProductContext"

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
    const { getOneProductById } = useContext(ProductContext)

    const getAllSales = () => {
        getSales()
        .then(response => {
            dispatch({type:"GET_ALL_SALES", payload: response})})
    }

    const getSalesByData = ({value, key}:PropsGetSale) => {
        getSaleByData({value, key})
        .then(response => {
            console.log(response);
            dispatch({type:"GET_ALL_SALES", payload:response})})
    }

    const postNewSale = (sale:NSale) => {
        postSale(sale)
        .then(response =>{
            getOneProductById(response.productId)
            dispatch({type:"POST_NEW_SALE",payload:response})})
    }

    const setProductId = (product:Product) => dispatch({type:"SET_PRODUCT_ID",payload:product}) 


    return(
        <SaleContext.Provider value={{saleState, getAllSales,postNewSale,setProductId,getSalesByData}}>
            {children}
        </SaleContext.Provider>
    )
}
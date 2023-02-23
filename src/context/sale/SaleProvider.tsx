import { useContext, useReducer } from "react"
import { getSaleByData, getSales, PropsGetSale } from "../../services/sale/getSales"
import SaleContext from "./SaleContext"
import { SaleReducer } from "./SaleReducer"
import { NSale, Product, Sale, SaleState } from "../../../types"
import { postSale } from "../../services/sale/postSale"
import { ProductContext } from "../product/ProductContext"
import { updateSaleById } from "../../services/sale/updateSale"

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE:SaleState = {
    sales:[],
    newSaleCreated:null,
    product:null,
    saleUpdated: null,
    saleSaved: null
}

export const SaleProvider = ({children}:ProviderProps) => {


    const [saleState, dispatch] = useReducer(SaleReducer, INITIAL_STATE)
    const { getOneProductById } = useContext(ProductContext)

    const getAllSales = () => {
        getSales()
        .then(response => {
            dispatch({type:"GET_ALL_SALES", payload: response.reverse()})})
    }

    const getSalesByData = ({value, key}:PropsGetSale) => {
        getSaleByData({value, key})
        .then(response => {
            console.log(response);
            dispatch({type:"GET_ALL_SALES", payload:response.reverse()})})
    }

    const postNewSale = (sale:NSale) => {
        postSale(sale)
        .then(response =>{
            getOneProductById(response.productId)
            dispatch({type:"POST_NEW_SALE",payload:response})})
    }

    const updateSale = (sale:Sale) => {
        updateSaleById(sale.id,sale)
        .then(response => {
            dispatch({type:"UPDATE_SALE",payload:response})
        })
        .catch(error => console.log(error))
    }

    const saveSale = (sale:Sale) => {
        dispatch({type:"SET_SALE", payload:sale})
    }

    const setProductId = (product:Product) => dispatch({type:"SET_PRODUCT_ID",payload:product}) 


    return(
        <SaleContext.Provider value={{saleState,
         getAllSales,
         postNewSale,
         setProductId,
         getSalesByData,
         updateSale,
         saveSale}}>
            {children}
        </SaleContext.Provider>
    )
}
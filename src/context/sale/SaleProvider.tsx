import { useContext, useReducer } from "react"
import { getSaleByData, getSales, PropsGetSale } from "../../services/sale/getSales"
import SaleContext from "./SaleContext"
import { SaleReducer } from "./SaleReducer"
import { NSale, Product, Sale, SaleState } from "../../../types"
import { postSale } from "../../services/sale/postSale"
import { ProductContext } from "../product/ProductContext"
import { updateSaleById } from "../../services/sale/updateSale"
import { deleteSaleById } from "../../services/sale/deleteSale"
import { reduceElement } from "../../services/reduceElement"

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
            dispatch({type:"GET_ALL_SALES", payload:response.reverse()})})
    }

    const postNewSale = async (sale:NSale) => {
        let responseReturn = {};
        await postSale(sale, String(saleState.product?.id))
        .then(response => {
            responseReturn = response;
            return response.json();
        })
        .then(response =>{
            getOneProductById(response.productId)
            dispatch({type:"POST_NEW_SALE",payload:response})})
        .catch(error => console.log(error))
        return responseReturn;
    }

    const deleteSale = async(sale:Sale) => {
        let responseReturn = {};

            await deleteSaleById(sale)
            .then(response => {
                responseReturn = response;
                return response.json()
            })
            .then(() => {
                const result = reduceElement(sale.id, saleState.sales);
                console.log(result);
                dispatch({type:"DELETE_SALE", payload: result})
            })
        return responseReturn;
    } 

    const updateSale = async(sale:Sale) => {
        let responseReturn = {};
        await updateSaleById(sale.id,sale)
        .then(response => {
            responseReturn = response;
            return response.json();
        })
        .then(response => {
            dispatch({type:"UPDATE_SALE",payload:response})
        })
        .catch(error => console.log(error))
        return responseReturn
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
         deleteSale,
         saveSale}}>
            {children}
        </SaleContext.Provider>
    )
}
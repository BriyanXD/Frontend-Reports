import { useReducer } from "react"
import { getSales } from "../../services/sale/getSales"
import SaleContext from "./SaleContext"
import { SaleReducer } from "./SaleReducer"
import { Sale, SaleState } from "../../../types"

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE:SaleState = {
    sales:[]
}

export const SaleProvider = ({children}:ProviderProps) => {


    const [saleState, dispatch] = useReducer(SaleReducer, INITIAL_STATE)

    const getAllSales = () => {
        getSales()
        .then(response => dispatch({type:"GET_ALL_SALES", payload: response}))
    }


    return(
        <SaleContext.Provider value={{saleState, getAllSales}}>
            {children}
        </SaleContext.Provider>
    )
}
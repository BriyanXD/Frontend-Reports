import { useReducer } from "react"
import { Inventory } from "../../../types"
import { fetchGetElements } from "../../services/fetchGetElements"
import { fetchPostElement } from "../../services/fetchPostElement"
import { filterinventoriesByDate, filterInventoriesByName } from "../../services/inventory/filterInventories"
import { InventoryContext } from "./InventoryContext"
import { InventoryReducer } from "./InventoryReducer"

interface TypeProps{
    children: JSX.Element[] | JSX.Element
}

const INITIAL_STATE = {
    inventories: [],
    products: [],
    loading: false,
    error: false
}

export const InventoryProvider = ({children}: TypeProps) => {

    const [inventoryState, dispatch] = useReducer(InventoryReducer, INITIAL_STATE);

    const GetInvontories = async() => {
        dispatch({type:"LOADING",payload:true})
        await fetchGetElements("inventory")
        .then(response => {
            return response.json();
        })
        .then(response => {
            dispatch({type:"GET_ALL_INVENTORY", payload: response})})
        .catch(() => {
                dispatch({type:"LOADING",payload:false})
                dispatch({type:"ERRROR",payload:true})
            })
        }

    const GetProducts = async() => {
        await fetchGetElements("product")
        .then(response => response.json())
        .then(response => dispatch({type:"GET_ALL_PRODUCTS", payload: response}) )
    }

    const FilterInventories = async(type:string, date:string) => {
        await fetchGetElements("inventory")
        .then(response => response.json())
        .then(response => dispatch({type:"FILTER_INVENTORIES", payload:filterinventoriesByDate(response, type, date)}))
    }


    const FilterByName = async(name:string) => {
        await fetchGetElements("inventory")
        .then(response => response.json())
        .then(response => dispatch({type:"FILTER_INVENTORIES", payload:filterInventoriesByName(response, name)}))
    }

    const PostInventory = async(element: Inventory) => {
        let httpResponse = {};
        await fetchPostElement<Inventory>("inventory", element)
        .then(response => {
            httpResponse = response;
            return response.json();})
        .then(response => dispatch({type:"POST_ONE_INVENTORY" , payload:response}))
        return httpResponse
    }

    return(
        <InventoryContext.Provider value={{inventoryState, GetInvontories, GetProducts, PostInventory, FilterInventories, FilterByName}}>
            {children}
        </InventoryContext.Provider>
    )
}
import { useReducer } from "react"
import { fetchGetElements } from "../../services/fetchGetElements"
import { InventoryContext } from "./InventoryContext"
import { InventoryReducer } from "./InventoryReducer"

interface TypeProps{
    children: JSX.Element[] | JSX.Element
}

const INITIAL_STATE = {
    inventories: [],
}

export const InventoryProvider = ({children}: TypeProps) => {

    const [inventoryState, dispatch] = useReducer(InventoryReducer, INITIAL_STATE);

    const GetInvontories = async() => {
        let httpResponse = {};
        await fetchGetElements("inventory")
        .then(response => {
            httpResponse = response
            return response.json();
        })
        .then(response => dispatch({type:"GET_ALL_INVENTORY", payload: response}))
        return httpResponse;
    }

    return(
        <InventoryContext.Provider value={{inventoryState, GetInvontories}}>
            {children}
        </InventoryContext.Provider>
    )
}
import { Inventory, Product } from "../../../types";
import { InventoryState } from "../../../types";
type InventoryActions =
    |{type: "GET_ALL_INVENTORY", payload: Inventory[]}
    |{type: "GET_ALL_PRODUCTS", payload: Product[]}
    |{type: "POST_ONE_INVENTORY", payload: Inventory}
    |{type: "LOADING", payload: boolean}
    |{type: "ERRROR", payload: boolean}



export const InventoryReducer = (state: InventoryState, action: InventoryActions):InventoryState => {
    switch (action.type) {
        case "GET_ALL_INVENTORY":
            return{...state, inventories: action.payload, loading:false, error: false}
        case "GET_ALL_PRODUCTS":
            return{...state, products: action.payload}
        case "POST_ONE_INVENTORY":
            return{...state, inventories: [action.payload, ...state.inventories]}
        case "LOADING":
            return{...state, loading: action.payload}
        case "ERRROR":
            return{...state, error: action.payload}
        default:
            return state;
    }
}
import { Inventory } from "../../../types";
import { InventoryState } from "../../../types";
type InventoryActions =
    |{type: "GET_ALL_INVENTORY", payload: Inventory[]}

export const InventoryReducer = (state: InventoryState, action: InventoryActions):InventoryState => {
    switch (action.type) {
        case "GET_ALL_INVENTORY":
            return{...state, inventories: action.payload}
        default:
            return state;
    }
}
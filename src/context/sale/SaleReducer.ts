import { Product, Sale, SaleState } from "../../../types";
import { replaceElement } from "../../services/replaceElement";

export type SalesActionProps =
    | {type: "GET_ALL_SALES", payload: Sale[]}
    | {type: "POST_NEW_SALE", payload: Sale}
    | {type: "SET_PRODUCT_ID", payload: Product}
    | {type: "UPDATE_SALE", payload: Sale}
    | {type: "SET_SALE", payload: Sale}
    | {type: "DELETE_SALE", payload: Sale[]}



export const SaleReducer = (state:SaleState, action: SalesActionProps): SaleState => {
    switch (action.type) {
        case "GET_ALL_SALES":
            return{...state, sales:action.payload}
        case "POST_NEW_SALE":
            return{...state, newSaleCreated:action.payload}
        case "SET_PRODUCT_ID":
            return{...state, product:action.payload}
        case "UPDATE_SALE":
            return{...state, saleUpdated: action.payload, sales:replaceElement<Sale>(action.payload, state.sales)}
        case "SET_SALE":
            return{...state, saleSaved:action.payload}
        case "DELETE_SALE":
            return{...state, sales:action.payload}
        default:
            return state;
    }
}
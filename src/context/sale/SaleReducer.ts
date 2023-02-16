import { Product, Sale, SaleState } from "../../../types";

export type SalesActionProps =
    | {type: "GET_ALL_SALES", payload: Sale[]}
    | {type: "POST_NEW_SALE", payload: Sale}
    | {type: "SET_PRODUCT_ID", payload: Product}



export const SaleReducer = (state:SaleState, action: SalesActionProps): SaleState => {
    switch (action.type) {
        case "GET_ALL_SALES":
            return{...state, sales:action.payload}
        case "POST_NEW_SALE":
            return{...state, newSaleCreated:action.payload}
        case "SET_PRODUCT_ID":
            return{...state, product:action.payload}
        default:
            return state;
    }
}
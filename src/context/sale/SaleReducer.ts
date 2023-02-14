import { Sale, SaleState } from "../../../types";

export type SalesActionProps =
    | {type: "GET_ALL_SALES", payload: Sale[]}


export const SaleReducer = (state:SaleState, action: SalesActionProps): SaleState => {
    switch (action.type) {
        case "GET_ALL_SALES":
            return{...state, sales:action.payload}
        default:
            return state;
    }
}
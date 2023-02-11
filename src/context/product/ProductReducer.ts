import { Product, ProductState } from "../../../types";


export type ProductAction =
    | { type: "GET_ALL_PRODUCTS", payload: Product[] }
    | { type: "POST_NEW_PRODUCT", payload: Product }
    | { type: "ERROR", payload: boolean }
    | { type: "LOADING", payload: boolean }
    | { type: "CREATED", payload: boolean }
    | { type: "ERROR_CREATED", payload: string }
    | { type: "SEARCH_PRODUCTS", payload: Product[] }
    | { type: "DELETE", payload: Product[] }
    | { type: "UPDATE_PRODUCT", payload: Product }
    | { type: "FILTER_BY_CATEGORY", payload: Product[] }

export const ProductReducer = (state: ProductState, action: ProductAction): ProductState => {

    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return {
                ...state,
                products: action.payload,
                error: false,
                loading: false
            }
        case "POST_NEW_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload],
                newProductCreated: action.payload,
            }
        case "ERROR":
            return {
                ...state,
                error: action.payload,
                loading: !action.payload
            }
        case "LOADING":
            return { ...state, loading: action.payload }
        case "ERROR_CREATED":
            return { ...state, newProductCreated: action.payload }
        case "SEARCH_PRODUCTS":
            return { ...state, products: action.payload }
        case "DELETE":
            return { ...state, products: action.payload }
        case "UPDATE_PRODUCT":
            return { ...state, productForUpdate: action.payload }
        case "FILTER_BY_CATEGORY":
            return { ...state, products: action.payload }
        default:
            return state;
    }
}
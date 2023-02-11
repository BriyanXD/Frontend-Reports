import { createContext } from "react";
import { NProduct, Product, ProductState } from "../../../types";
import { ProductAction } from "./ProductReducer";

export type ProductContextProps = {
    productState: ProductState
    getProducts: () => void
    newProduct: (product:NProduct) => void
    searchProducts:(word:string) => void;
    deleteProduct: (id:number) => void
    setProductToUpdated: (product:Product)=> void
    updateProduct: (product:Product) => void
    filterProducts: (category:string) => void
    dispatch: React.Dispatch<ProductAction>
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);


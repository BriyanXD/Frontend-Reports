import { createContext } from "react";
import { NSale, Product, Sale, SaleState } from "../../../types";


interface ContextProps{
    saleState: SaleState;
    getAllSales: () => void
    postNewSale: (Sale:NSale) => void
    setProductId: (product:Product) => void
}


const SaleContext = createContext<ContextProps>({} as ContextProps)

export default SaleContext;
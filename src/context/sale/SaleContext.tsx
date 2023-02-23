import { createContext } from "react";
import { NSale, Product, Sale, SaleState } from "../../../types";
import { PropsGetSale } from "../../services/sale/getSales";


interface ContextProps{
    saleState: SaleState;
    getAllSales: () => void;
    postNewSale: (Sale:NSale) => void;
    setProductId: (product:Product) => void;
    getSalesByData: ({value, key}:PropsGetSale) => void
    updateSale: (sale:Sale) => void
    saveSale: (sale:Sale) => void 
}


const SaleContext = createContext<ContextProps>({} as ContextProps)

export default SaleContext;
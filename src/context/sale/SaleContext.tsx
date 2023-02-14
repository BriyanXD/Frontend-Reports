import { createContext } from "react";
import { Sale, SaleState } from "../../../types";


interface ContextProps{
    saleState: SaleState;
    getAllSales: () => void
}


const SaleContext = createContext<ContextProps>({} as ContextProps)

export default SaleContext;
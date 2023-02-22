import { Sale } from "../../../types";

export const replaceSale = (sale:Sale, state:Sale[]) => {
    return state.map(currentSale => {
        if(currentSale.id === sale.id) return sale
        return currentSale
    })
}
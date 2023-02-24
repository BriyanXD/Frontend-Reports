import { Sale } from "../../../types";

export const reduceSale = (saleId:string, sales:Sale[]) => {
    return sales.filter(sale => String(sale.id) !== saleId)
}
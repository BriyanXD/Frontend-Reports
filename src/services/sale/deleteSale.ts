import { Sale } from "../../../types";
import { URL } from "../../config";
 
export const deleteSaleById = (sale: Sale):Promise<Response> => {
    return fetch(`${URL}/sale/${sale.id}`,
    {method:"DELETE",
    body:JSON.stringify(sale),
    headers:{'Content-Type': 'application/json'}})
}
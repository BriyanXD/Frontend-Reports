import { Sale } from "../../../types"
import { URL } from "../../config"

export const updateSaleById = (id:number,data:Sale):Promise<Sale> => {
    return fetch(`${URL}/sale/${id}`,
    {method:"PUT",headers:{'Content-Type':'application/json','Accept':'application/json'},
    body:JSON.stringify(data)})
    .then(response => response.json())
}
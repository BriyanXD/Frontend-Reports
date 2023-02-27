import { Sale } from "../../../types"
import { URL } from "../../config"

export const updateSaleById = (id:string,data:Sale):Promise<Response> => {
    return fetch(`${URL}/sale/${id}`,
    {method:"PUT",headers:{'Content-Type':'application/json','Accept':'application/json'},
    body:JSON.stringify(data)})
}
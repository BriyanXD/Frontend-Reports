import { Sale } from "../../../types"
import { URL } from "../../config"

export const updateSaleById = (productId:number,data:Sale):Promise<Sale> => {
    return fetch(`${URL}/sale/${productId}`,
    {method:"PUT",headers:{'Content-Type':'Aplication/json','Accept': 'application/json'},
    body:JSON.stringify(data)})
    .then(response => response.json())
}
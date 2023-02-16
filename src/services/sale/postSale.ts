import { NSale, Sale } from "../../../types"
import { URL } from "../../config"

const postSale = (sale:NSale):Promise<Sale> => {
    return fetch(`${URL}/sale`,
    {method:"POST",
    body: JSON.stringify(sale),
    headers:{'Content-Type': 'application/json'}})
    .then(response => response.json())
}

export {postSale}
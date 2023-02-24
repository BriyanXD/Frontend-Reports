import { NSale, Sale } from "../../../types"
import { URL } from "../../config"

const postSale = (sale:NSale, productId: string):Promise<Response> => {
    return fetch(`${URL}/sale`,
    {method:"POST",
    body: JSON.stringify({...sale, productId}),
    headers:{'Content-Type': 'application/json'}})
}

export {postSale}
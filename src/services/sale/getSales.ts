import { Sale } from "../../../types"
import {URL} from "../../config";

const getSales = ():Promise<Sale[]> => {
     return fetch(`${URL}/sale`,{method:"GET"})
    .then(response => response.json())
}

export { getSales }
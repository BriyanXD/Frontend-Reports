import { Sale } from "../../../types"
import {URL} from "../../config";

export type PropsGetSale = {
    value:string;
    key: "createdAt" | "name";
}


const getSales = ():Promise<Sale[]> => {
     return fetch(`${URL}/sale`,{method:"GET"})
    .then(response => response.json())
}

const getSaleByData = ({value, key}:PropsGetSale) => {
    console.log(`${URL}/sale?${key}=${value}`);
    return fetch(`${URL}/sale?${key}=${value}`,{method:"GET"})
    .then(response => response.json())
}

export { getSales, getSaleByData }
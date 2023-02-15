import {Product} from "../../../types"
import {URL} from "../../config";

const getAllProducts = ():Promise<Product[]> => {
    return fetch(`${URL}/product`,{method:"GET"})
    .then(response => response.json())
}

export {getAllProducts}
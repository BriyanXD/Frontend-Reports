import { Product, NProduct } from "../../../types";
import {URL} from "../../config";

const postNewProduct = (product: NProduct):Promise<Response> => {
    return fetch(`${URL}/product`,
    {method:"POST", body:JSON.stringify(product),
    headers:{'Accept': 'application/json',
    'Content-Type': 'application/json'}})
}

export default postNewProduct;
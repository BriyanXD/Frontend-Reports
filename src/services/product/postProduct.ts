import { Product, NProduct } from "../../../types";
import {URL} from "../../config";

const postNewProduct = (product: NProduct):Promise<Product> => {
    return fetch(`${URL}/product`,
    {method:"POST", body:JSON.stringify(product),
    headers:{'Accept': 'application/json',
    'Content-Type': 'application/json'}})
    .then(response => response.json())
}

export default postNewProduct;
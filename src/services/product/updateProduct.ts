import { Product } from "../../../types";
import {URL} from "../../config";

const updateProductById = (product: Product, productId:number):Promise<Product> => {
    return fetch(`${URL}/product?productId=${productId}`,
    {method:"PUT", body:JSON.stringify(product),
    headers:{'Accept': 'application/json',
    'Content-Type': 'application/json'}})
    .then(response => response.json())
}

export default updateProductById;
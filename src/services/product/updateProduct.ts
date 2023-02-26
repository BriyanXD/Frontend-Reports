import { Product } from "../../../types";
import {URL} from "../../config";

const updateProductById = (product: Product, productId:string):Promise<Response> => {
    return fetch(`${URL}/product?productId=${productId}`,
    {method:"PUT",
    body:JSON.stringify(product),
    headers:{'Accept': 'application/json','Content-Type': 'application/json'}})
}

export default updateProductById;
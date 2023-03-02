import {Product} from "../../../types"
import {URL} from "../../config";

const getAllProducts = ():Promise<Response> => {
    return fetch(`${URL}/product`,{method:"GET"})
}

const getOneProduct = (productId:number):Promise<Product> => {
    return fetch(`${URL}/product?productId=${productId}`,{method:"GET"})
    .then(response => {
        return response.json()
    })
}

export {getAllProducts, getOneProduct}
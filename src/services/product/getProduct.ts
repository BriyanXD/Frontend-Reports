import {Product} from "../../../types"
import {URL} from "../../config";

const getAllProducts = ():Promise<Product[]> => {
    return fetch(`${URL}/product`,{method:"GET"})
    .then(response => response.json())
}

const getOneProduct = (productId:number):Promise<Product[]> => {
    return fetch(`${URL}/product?PorductId=${productId}`,{method:"GET"})
    .then(response => response.json())
}

export {getAllProducts, getOneProduct}
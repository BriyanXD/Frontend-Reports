import {Product} from "../../../types"

const getAllProducts = ():Promise<Product[]> => {
    return fetch("http://192.168.0.9:3001/product",{method:"GET"})
    .then(response => response.json())
}

export {getAllProducts}
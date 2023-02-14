import {Product} from "../../../types"

const getAllProducts = ():Promise<Product[]> => {
    return fetch("http://localhost:3001/product",{method:"GET"})
    .then(response => response.json())
}

export {getAllProducts}
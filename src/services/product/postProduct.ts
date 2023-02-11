import { Product, NProduct } from "../../../types";

const postNewProduct = (product: NProduct):Promise<Product> => {
    return fetch("http://localhost:3001/product",
    {method:"POST", body:JSON.stringify(product),
    headers:{'Accept': 'application/json',
    'Content-Type': 'application/json'}})
    .then(response => response.json())
}

export default postNewProduct;
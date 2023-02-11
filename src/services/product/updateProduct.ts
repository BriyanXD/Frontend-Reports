import { Product } from "../../../types";

const updateProductById = (product: Product, productId:number):Promise<Product> => {
    return fetch(`http://localhost:3001/product?productId=${productId}`,
    {method:"PUT", body:JSON.stringify(product),
    headers:{'Accept': 'application/json',
    'Content-Type': 'application/json'}})
    .then(response => response.json())
}

export default updateProductById;
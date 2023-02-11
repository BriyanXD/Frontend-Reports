import { Product } from "../../../types";

const replaceProduct = (newProduct:Product, allProducts:Product[]) => {
    const result = allProducts.map(product => {
        if(product.id === newProduct.id)return newProduct
        else return product
    })
    return result
}

export default replaceProduct;
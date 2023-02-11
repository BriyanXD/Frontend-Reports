import { Product } from "../../../types";

const filterProductDeleted = (id: number, products:Product[]):Product[] => {

    const result = products.filter(product => product.id !== id)
    return result

}

export {filterProductDeleted}
import { Product } from "../../../types";

const filterProductByCategory = (category: string, products:Product[]):Product[] => {
    if(category === "all") return products
    return products.filter(product => product.category === category)
}

export default filterProductByCategory;
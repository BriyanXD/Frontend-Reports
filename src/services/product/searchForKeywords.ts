import { Product } from "../../../types";

const SearchForKeywords = (state: Product[], word: string):Product[] => {
    if(word === "") return state
    const productsFiltrated = state.filter(product => {
        if(product.name.toString().toLowerCase().includes(word.toLowerCase()))return product
        if(product.price === parseInt(word)) return product
    })
    return productsFiltrated as Product[];
}

export default SearchForKeywords;
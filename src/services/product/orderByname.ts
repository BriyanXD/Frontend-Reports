import { Product } from "../../../types";

const orderByName = (array:Product[]):Product[] => {
    const result = array.sort((a , b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
        if(a.name.toLowerCase() > b.name.toLowerCase())  return 1
        return 0
    })
    return result;
}
export default orderByName;
import {URL} from "../../config";

const deleteProductById = (id:string):Promise<number> => {
    return fetch(`${URL}/product/${id}`,{method:"DELETE"})
    .then(response => response.json())
}
export default deleteProductById
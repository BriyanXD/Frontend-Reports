import { URL } from "../config"

export const deleteElement = async(route:string, id:string):Promise<Response> => {
    return await fetch(`${URL}/${route}/${id}`,{method:"DELETE"})
}
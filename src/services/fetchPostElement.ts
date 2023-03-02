import { URL } from "../config"

export const fetchPostElement = <T extends Object>(route:string, element:T):Promise<Response> => {
    console.log(element);
    return fetch(`${URL}/${route}`,{
    method:"POST",
    body: JSON.stringify(element),
    headers:{'Content-Type': 'application/json',
}})
}
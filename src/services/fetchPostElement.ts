import { URL } from "../config"

export const fetchPostElement = <T extends Object>(route:string, element:T, meth?:string):Promise<Response> => {
    console.log(element);
    return fetch(`${URL}/${route}`,{
    method: meth,
    body: JSON.stringify(element),
    headers:{'Content-Type': 'application/json',
}})
}
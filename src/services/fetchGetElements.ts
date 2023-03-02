import { URL } from "../config"

export const fetchGetElements = (route: string):Promise<Response> => {
    return fetch(`${URL}/${route}`,
    {method:"GET",
    headers:{"Content-type":"Application/json"}})
}
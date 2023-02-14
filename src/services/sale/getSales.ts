import { Sale } from "../../../types"

const getSales = ():Promise<Sale[]> => {
     return fetch("http://localhost:3001/sale",{method:"GET"})
    .then(response => response.json())
}

export { getSales }
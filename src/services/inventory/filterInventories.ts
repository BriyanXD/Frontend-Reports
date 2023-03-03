import { Inventory } from "../../../types";

const filterinventoriesByDate = (state: Inventory[], type: string, date:string):Inventory[] => {
    return state.filter(element => {
        if(type === "entryDate"){
            if(!date && element.entryDate !== null) return element
            if(String(element.entryDate) === date) return element
        }
        if(type === "exitDate"){
            if(!date && element.exitDate !== null) return element
            if(String(element.exitDate) === date) return element 
        }
        if(type === "all"){
            if(!date) return element
            if(String(element.entryDate) === date || String(element.exitDate) === date) return element
        }
    })
}

const  filterInventoriesByName = (state: Inventory[], name: string) => {
    return state.filter(element => element.prod.name.toLowerCase().includes(name.toLowerCase()))
}

export { filterInventoriesByName, filterinventoriesByDate }
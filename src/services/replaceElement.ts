
export const replaceElement = <T extends {id?: string}>(element:T, state:T[]):T[] => {
    return state.map(currentElement => {
        if(currentElement?.id === element?.id) return element
        return currentElement
    })
}
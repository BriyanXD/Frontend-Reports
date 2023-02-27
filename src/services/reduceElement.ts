export const reduceElement = <T extends {id?: string}>(id: string, state: T[]) => {
    return state.filter(currentElement => currentElement.id !== id)
}
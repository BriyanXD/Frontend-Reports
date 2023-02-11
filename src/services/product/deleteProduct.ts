const deleteProductById = (id:number):Promise<number> => {
    return fetch(`http://localhost:3001/product/${id}`,{method:"DELETE"})
    .then(response => response.json())
}
export default deleteProductById
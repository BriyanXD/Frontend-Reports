import { useContext, useEffect, useState } from "react";
import { Product } from "../../../../types";
import { ProductContext } from "../../../context/product/ProductContext";

const UpdateProduct = () => {
    const {productState, updateProduct, deleteProduct} = useContext(ProductContext);
    const {productForUpdate} = productState
    const [productToUpdate, setProductToUpdate] = useState<Product|null>(productForUpdate)

/*     const [updated, setUpdated] = useState<boolean>(false);
    const [errorUpdated, setErrorUpdated] = useState<boolean>(false);
 */
    useEffect(() => {
        setProductToUpdate(productForUpdate)
    },[productForUpdate])

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setProductToUpdate({...productToUpdate, [event.target.name]:event.target.value} as Product)

    const handleSubmit = (event:React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
        updateProduct(productToUpdate as Product)
    }

 return(
    <form className="d-flex flex-column gap-2">
        <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">ID</span>
                <input type="text" className="form-control" placeholder="id" aria-label="name" aria-describedby="addon-wrapping" name="id" value={productToUpdate?.id} disabled/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Name</span>
                <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="addon-wrapping" name="name" value={productToUpdate?.name} onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Precio</span>
                <input type="text" className="form-control" placeholder="price" aria-label="price" aria-describedby="addon-wrapping" name="price" value={productToUpdate?.price} onChange={handleChange}/>

                <span className="input-group-text" id="addon-wrapping">Cantidad</span>
                <input type="text" className="form-control" placeholder="quantity" aria-label="quantity" aria-describedby="addon-wrapping" name="quantity" value={productToUpdate?.quantity} onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Categoria</span>
                <select className="form-select" aria-label="Default select example" name="category" value={productToUpdate?.category} onChange={handleChange}>
                    <option value="bio-seguridad">bio-seguridad</option>
                    <option value="alimento">alimento</option>
                    <option value="limpieza">limpieza</option>
                    <option value="uniforme">uniforme</option>
                    <option value="insumo">insumo</option>
                </select>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Condicion</span>
                <select className="form-select" aria-label="Default select example" name="condition" value={productToUpdate?.condition} onChange={handleChange}>
                    <option value="hight">alto</option>
                    <option value="warning">medio</option>
                    <option value="danger">bajo</option>
                    <option value="new">nuevo</option>
                    <option value="ok">normal</option>
                </select>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Unidad</span>
                <input type="text" className="form-control" placeholder="unit" aria-label="unit" aria-describedby="addon-wrapping" name="unit" value={productToUpdate?.unit} onChange={handleChange}/>
            </div>
            <div className="card">
                <div className="card-body d-flex justify-content-around">
                    <input type="submit" className="btn btn-primary" value="Guardar" onClick={handleSubmit}/>
                    <input type="button" className="btn btn-outline-danger" value="Eliminar" onClick={() => deleteProduct(Number(productToUpdate?.id))}/>
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                </div>
            </div>
        </form>
 )
}

export default UpdateProduct;
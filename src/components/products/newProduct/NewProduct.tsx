import { useContext, useState, useEffect } from "react";
import { NProduct } from "../../../../types";
import { ProductContext } from "../../../context/product/ProductContext";
import { useForm } from "../../../hooks/useForm";
import { Message } from "../../messages/Message";


const NewProduct = () => {
    const { newProduct, productState} = useContext(ProductContext);
    const { newProductCreated } = productState
    const {formData, handleChange, clearForm} = useForm<NProduct>({
        name: "",
        quantity: 0,
        category:"bio-seguridad",
        condition:"",
        unit:"",
        price:0
    })
    const [created, setCreated] = useState<boolean>(false);
    const [errorCreated, setErrorCreated] = useState<boolean>(false);

    useEffect(() => {
        if(newProductCreated === "ERROR_CREATED"){
            setCreated(false)
            setErrorCreated(true)
        }
        if(typeof newProductCreated === "object" && newProductCreated !== null){
            setCreated(true)
            setErrorCreated(false)
        }
    }, [newProductCreated])


    const handleSubmit = (event:React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
        newProduct(formData);
    }


    const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault()
        clearForm()
    }

    return(
        <form className="d-flex flex-column gap-2">
            {created ? <Message setFunction={setCreated} bg="bg-success" message="Producto registrado" text="text-white"/> : null}
            {errorCreated ? <Message setFunction={setErrorCreated} bg="bg-danger" message="Error al registrar" text="text-white"/> : null}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Name</span>
                <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="addon-wrapping" value={formData.name} name="name" onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Precio</span>
                <input type="text" className="form-control" placeholder="price" aria-label="price" aria-describedby="addon-wrapping" name="price" value={formData.price} onChange={handleChange}/>

                <span className="input-group-text" id="addon-wrapping">Cantidad</span>
                <input type="text" className="form-control" value={formData.quantity} placeholder="quantity" aria-label="quantity" aria-describedby="addon-wrapping" name="quantity" onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Categoria</span>
                <select className="form-select" aria-label="Default select example" name="category" value={formData.category} onChange={handleChange}>
                    <option value="bio-seguridad">bio-seguridad</option>
                    <option value="alimento">alimento</option>
                    <option value="limpieza">limpieza</option>
                    <option value="uniforme">uniforme</option>
                    <option value="insumo">insumo</option>
                </select>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Unidad</span>
                <input type="text" className="form-control" placeholder="unit" aria-label="unit" aria-describedby="addon-wrapping" name="unit" value={formData.unit} onChange={handleChange}/>
            </div>
            <div className="card">
                <div className="card-body d-flex justify-content-around">
                    <input type="submit" className="btn btn-primary" value="Agregar" onClick={handleSubmit}/>
                    <button className="btn btn-outline-success" onClick={handleClear}>Limpiar</button>
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                </div>
            </div>
        </form>
    )
}

export default NewProduct;
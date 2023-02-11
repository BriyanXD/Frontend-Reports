import { useContext, useState, useEffect } from "react";
import { NProduct } from "../../../../types";
import { ProductContext } from "../../../context/product/ProductContext";


const NewProduct = () => {
    const { newProduct, productState} = useContext(ProductContext);
    const { newProductCreated } = productState
    const [productToCreate, setProductToCreate] = useState<NProduct>({
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

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setProductToCreate({...productToCreate, [event.target.name]:event.target.value})

    const handleSubmit = (event:React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
        newProduct(productToCreate);
    }

    const renderMessageCreated = () => {
        setTimeout(() => setCreated(false),3000)
        return ( <div className="card bg-success text-white d-flex justify-content-center align-items-center">
                <span>Producto creado con exito</span>
        </div> )
    }
    const renderMessageErrorCreated = () => {
        setTimeout(() => setErrorCreated(false),3000)
        return ( <div className="card bg-danger text-white d-flex justify-content-center align-items-center">
                <span>Error al crear el producto, el nombre del producto ya existe</span>
        </div> )
    }

    const clearForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault()
        setProductToCreate({
            name: "",
            quantity: 0,
            category:"",
            condition:"",
            unit:"",
            price: 0
        })
    }

    return(
        <form className="d-flex flex-column gap-2">
            {created ? renderMessageCreated() : null}
            {errorCreated ? renderMessageErrorCreated() : null}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Name</span>
                <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="addon-wrapping" value={productToCreate.name} name="name" onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Precio</span>
                <input type="text" className="form-control" placeholder="price" aria-label="price" aria-describedby="addon-wrapping" name="price" value={productToCreate.price} onChange={handleChange}/>

                <span className="input-group-text" id="addon-wrapping">Cantidad</span>
                <input type="text" className="form-control" value={productToCreate.quantity} placeholder="quantity" aria-label="quantity" aria-describedby="addon-wrapping" name="quantity" onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Categoria</span>
                <select className="form-select" aria-label="Default select example" name="category" value={productToCreate.category} onChange={handleChange}>
                    <option value="bio-seguridad">bio-seguridad</option>
                    <option value="alimento">alimento</option>
                    <option value="limpieza">limpieza</option>
                    <option value="uniforme">uniforme</option>
                    <option value="insumo">insumo</option>
                </select>
            </div>
            {/* <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Condicion</span>
                <select className="form-select" aria-label="Default select example" name="condition" onChange={handleChange}>
                    <option value="hight">alto</option>
                    <option value="warning">medio</option>
                    <option value="danger">bajo</option>
                    <option value="new">nuevo</option>
                    <option value="ok">normal</option>
                </select>
            </div> */}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Unidad</span>
                <input type="text" className="form-control" placeholder="unit" aria-label="unit" aria-describedby="addon-wrapping" name="unit" value={productToCreate.unit} onChange={handleChange}/>
            </div>
            <div className="card">
                <div className="card-body d-flex justify-content-around">
                    <input type="submit" className="btn btn-primary" value="Agregar" onClick={handleSubmit}/>
                    <button className="btn btn-outline-success" onClick={clearForm}>Limpiar</button>
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                </div>
            </div>
        </form>
    )
}

export default NewProduct;
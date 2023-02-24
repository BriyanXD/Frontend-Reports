import { useContext, useState, useEffect } from "react";
import { NProduct, Product, ProductError } from "../../../../types";
import { ProductContext } from "../../../context/product/ProductContext";
import { useForm } from "../../../hooks/useForm";
import { Message } from "../../messages/Message";


const NewProduct = () => {

    const initialState = {
        name: "",
        quantity: "",
        category:"bio-seguridad",
        condition:"",
        unit:"",
        price: ""
    }

    const { newProduct } = useContext(ProductContext);
    
    
    const validationsForm = (formData: Product) => {
        const errors = {} as ProductError
        
        if(!formData.name) errors.name = "El campo 'Nombre' es requerido"
        if(!formData.price) errors.price = "El campo 'Precio' es requerido"
        if(!formData.quantity) errors.quantity = "El campo 'Cantidad' es requerido"

        return errors
    }
    
    const {formData, handleChange, handleSubmit, handleBlur, clearForm, response, error, errors, loading} = useForm<NProduct>(initialState,validationsForm)


    return(
        <form className="d-flex flex-column gap-2" onSubmit={e => handleSubmit(e, newProduct)}>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Nombre</span>
                <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="addon-wrapping" value={formData.name} name="name" onChange={handleChange} onBlur={handleBlur} required/>
            </div>
            {errors.name && <Message bg="bg-danger" message={errors.name} text="text-white"/>}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Precio</span>
                <input type="text" className="form-control" placeholder="price" aria-label="price" aria-describedby="addon-wrapping" name="price" value={formData.price} onChange={handleChange} onBlur={handleBlur} required/>

                <span className="input-group-text" id="addon-wrapping">Cantidad</span>
                <input type="text" className="form-control" value={formData.quantity} placeholder="quantity" aria-label="quantity" aria-describedby="addon-wrapping" name="quantity" onChange={handleChange} onBlur={handleBlur} required/>
            </div>
            {errors.price && <Message bg="bg-danger" message={errors.price} text="text-white"/>}
            {errors.quantity && <Message bg="bg-danger" message={errors.quantity} text="text-white"/>}
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
            {loading && <Message bg="bg-primary" message="Creando producto espere..." text="text-white"/>}
            {response && <Message bg="bg-success" message="Producto creado." text="text-white"/>}
            {error && <Message bg="bg-danger" message="Error al crear producto intenta nuevamente." text="text-white"/>}
            <div className="card">
                <div className="card-body d-flex justify-content-around">
                    <input type="submit" className="btn btn-primary" value="Agregar" disabled={loading}/>
                    <input type="button" value="Limpiar" className="btn btn-outline-success" onClick={clearForm} disabled={loading}/>
                    <input type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close" value="Cerrar" onClick={clearForm} disabled={loading}/>
                </div>
            </div>
        </form>
    )
}

export default NewProduct;
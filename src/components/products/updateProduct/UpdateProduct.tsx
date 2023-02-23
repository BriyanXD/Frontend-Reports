import { useContext, useEffect, useState } from "react";
import { Product, ProductError } from "../../../../types";
import { ProductContext } from "../../../context/product/ProductContext";
import { useForm } from "../../../hooks/useForm";
import { Message } from "../../messages/Message";

const UpdateProduct = () => {

    const {productState, updateProduct, deleteProduct} = useContext(ProductContext);
    const {productForUpdate} = productState

    
    useEffect(() => {
        setFormData(productForUpdate as Product)
    },[productForUpdate])

    const initialState:Product = {
        id:0,
        name:"",
        price:0,
        quantity:0,
        category:"",
        condition:"",
        unit:""
    }

    const validationsForm = (formData:Product) => {
        let errors = {} as ProductError;
        
        if(!formData.name) errors.name = "El campo 'Nombre' es requerido.";
        else if(formData.name.length > 25)errors.name = "El campo 'Nombre' no debe exceder los 25 caracteres."
        if(!formData.price) errors.price = "El campo 'Precio' es requerido.";
        else if(formData.price < 1) errors.price = "El campo 'Precio' no pude ser 0.";
        if(!formData.quantity) errors.quantity = "El campo 'Cantidad' es requerido.";


        return errors;
    }

    const {handleChange,
        handleBlur,
        formData,
        handleSubmit,
        setFormData,
        errors,error,response,loading} = useForm<Product>(initialState, validationsForm)


 return(
    <form className="d-flex flex-column gap-2" onSubmit={e => handleSubmit(e,updateProduct)}>
        <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">ID</span>
                <input type="text" className="form-control" placeholder="id" aria-label="id" aria-describedby="addon-wrapping" name="id" value={formData?.id} disabled/>
        </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Nombre</span>
                <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="addon-wrapping" name="name" value={formData?.name} onChange={handleChange} onBlur={handleBlur} required/>
            </div>

            {errors?.name && <Message bg="bg-danger" message={errors.name} text="text-white"/>}

            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Precio</span>
                <input type="text" className="form-control" placeholder="price" aria-label="price" aria-describedby="addon-wrapping" name="price" value={formData?.price} onChange={handleChange} onBlur={handleBlur} required/>

                <span className="input-group-text" id="addon-wrapping">Cantidad</span>
                <input type="text" className="form-control" placeholder="quantity" aria-label="quantity" aria-describedby="addon-wrapping" name="quantity" value={formData?.quantity} onChange={handleChange} onBlur={handleBlur} required/>
            </div>

            {errors?.price && <Message bg="bg-danger" message={errors.price} text="text-white"/>}
            {errors?.quantity && <Message bg="bg-danger" message={errors.quantity} text="text-white"/>}

            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Categoria</span>
                <select className="form-select" aria-label="Default select example" name="category" value={formData?.category} onChange={handleChange}>
                    <option value="bio-seguridad">bio-seguridad</option>
                    <option value="alimento">alimento</option>
                    <option value="limpieza">limpieza</option>
                    <option value="uniforme">uniforme</option>
                    <option value="insumo">insumo</option>
                </select>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Condicion</span>
                <select className="form-select" aria-label="Default select example" name="condition" value={formData?.condition} onChange={handleChange}>
                    <option value="hight">alto</option>
                    <option value="warning">medio</option>
                    <option value="danger">bajo</option>
                    <option value="new">nuevo</option>
                    <option value="ok">normal</option>
                </select>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Unidad</span>
                <input type="text" className="form-control" placeholder="unit" aria-label="unit" aria-describedby="addon-wrapping" name="unit" value={formData?.unit} onChange={handleChange} required/>
            </div>
            {loading && <Message bg="bg-primary" message="Guardando espere..." text="text-white"/>}
            {error && <Message bg="bg-danger" message="Error al guardar intenta nuevamente." text="text-white"/>}
            {response && <Message bg="bg-success" message="Datos guardados." text="text-white"/>}
            <div className="card">
                <div className="card-body d-flex justify-content-around">
                    <input type="submit" className="btn btn-primary" value="Guardar" disabled={loading}/>
                    <input type="button" className="btn btn-outline-danger" value="Eliminar" onClick={() => deleteProduct(Number(formData?.id))} disabled={loading}/>
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                </div>
            </div>
        </form>
 )
}

export default UpdateProduct;
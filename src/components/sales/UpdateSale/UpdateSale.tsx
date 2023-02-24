import { useContext, useEffect, useState } from "react";
import { Sale, SaleError } from "../../../../types";
import SaleContext from "../../../context/sale/SaleContext";
import { useForm } from "../../../hooks/useForm";
import { Message } from "../../messages/Message";

const UpdateSale = () => {
    const {saleState, updateSale} = useContext(SaleContext);
    const {saleSaved} = saleState

const validationsForm = (formData: Sale) => {
    const errors = {} as SaleError

    if(!formData.quantity) errors.quantity = "El campo 'Cantidad' es requerido."

    return errors;
}

const warningsForm = (formData: Sale) => {
    let warnigns = {} as SaleError

    if(formData.total) warnigns.total = "EL campo 'Total' tiene un valor esto impide que el sistema calcule el total de forma automatica, para que el sistema calcule el total envia el campo 'Total' vacio."

    return warnigns;
}

const {handleChange, formData, setFormData, handleBlur, errors, handleSubmit, error, loading, response, warnigns}= 
    useForm<Sale>(saleSaved as Sale, validationsForm, warningsForm)

    useEffect(() => {
        setFormData(saleSaved as Sale)
    },[saleSaved])

 return(
    <form className="d-flex flex-column gap-2" onSubmit={e => handleSubmit(e, updateSale)}>
        <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">ID</span>
                <input type="text" className="form-control" placeholder="id" aria-label="id" aria-describedby="addon-wrapping" name="id" value={formData?.id} disabled/>
        </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Name</span>
                <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="addon-wrapping" name="name" value={formData?.product?.name} onChange={handleChange} disabled/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Precio</span>
                <input type="text" className="form-control" placeholder="price" aria-label="price" aria-describedby="addon-wrapping" name="price" value={formData?.product?.price} onChange={handleChange} disabled/>

                <span className="input-group-text" id="addon-wrapping">Cantidad</span>
                <input type="text" className="form-control" placeholder="quantity" aria-label="quantity" aria-describedby="addon-wrapping" name="quantity" value={formData?.quantity} onChange={handleChange} onBlur={handleBlur}/>
            </div>
            {errors.quantity && <Message bg="bg-danger" message={errors.quantity} text="text-white"/>}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Total</span>
                <input type="text" className="form-control" placeholder="total" aria-label="total" aria-describedby="addon-wrapping" name="total" value={formData?.total} onChange={handleChange}/>
            </div>
            {warnigns.total && <Message bg="bg-warning" message={warnigns.total} text="text-black"/>}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Fecha</span>
                <input type="date" className="form-control" placeholder="createdAt" aria-label="createdAt" aria-describedby="addon-wrapping" name="createdAt" value={String(formData?.createdAt)} disabled/>
                <span className="input-group-text" id="addon-wrapping">Hora</span>
                <input type="text" className="form-control" placeholder="creationTIme" aria-label="creationTIme" aria-describedby="addon-wrapping" name="creationTIme" value={String(formData?.creationTime)} disabled/>
            </div>
            {loading && <Message bg="bg-primary" message="Guardando, espere..." text="text-white"/>}
            {error && <Message bg="bg-danger" message="Error al guardar, intenta nuevamente." text="text-white"/>}
            {response && <Message bg="bg-success" message="El producto fue actualizado con exito." text="text-white"/>}
            <div className="card">
                <div className="card-body d-flex justify-content-around">
                    <input type="submit" className="btn btn-primary" value="Guardar" disabled={loading}/>
                    {/* <input type="button" className="btn btn-outline-danger" value="Eliminar" onClick={() => deleteProduct(Number(formData?.id))}/> */}
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                </div>
            </div>
        </form>
 )
}

export default UpdateSale;
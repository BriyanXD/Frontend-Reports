import React, { useContext, useEffect, useState } from "react";
import { NSale, Sale, SaleError } from "../../../../types";
import SaleContext from "../../../context/sale/SaleContext";
import { useForm } from "../../../hooks/useForm";
import { Message } from "../../messages/Message";


const NewSale = () => {
    const initialState: NSale = {
        quantity: 0,
        entri: 0,
    }

    const valitdationsFrom = (formData: Sale) => {
        const errors = {} as SaleError;

        if(!formData.quantity) errors.quantity = "EL campo 'Cantidad' es requerido."
        else if(formData.quantity < 1) errors.quantity = "EL campo 'Cantidad' no puede ser 0"
        else if(formData.quantity > Number(product?.quantity)) errors.quantity = `EL valor del campo 'Cantidad' excede el stock disponible: ${product?.quantity}`

        return errors;
    }

    const { formData, handleChange, clearForm, handleSubmit, handleBlur, errors, error, loading, response} = useForm<NSale>(initialState, valitdationsFrom)

    const { saleState, postNewSale} = useContext(SaleContext);
    const {  product } = saleState
    const [saleToCreate, setSaleToCreate] = useState({total:0,change:0})


    useEffect(() => {
        setSaleToCreate({...saleToCreate,
        total:Number(Number(formData.quantity) * (product?.price || 0)),
        change: Number(Number(formData.entri) - saleToCreate.total) || 0})},[formData]) 


    return(
        <form className="d-flex flex-column gap-2" onSubmit={e => handleSubmit(e, postNewSale)}>
            <h5 className="d-flex justify-content-center">{product?.name}</h5>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Cantidad</span>
                <input type="text" className="form-control" value={formData.quantity} placeholder="quantity" aria-label="quantity" aria-describedby="addon-wrapping" name="quantity" onChange={handleChange} onBlur={handleBlur} required/>
            </div>
            {errors.quantity && <Message bg="bg-danger" message={errors.quantity} text="text-white"/>}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Entrada</span>
                <input type="number" className="form-control" value={Number(formData.entri)} placeholder="entri" aria-label="entri" aria-describedby="addon-wrapping" name="entri" onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Total</span>
                <input type="text" className="form-control" value={saleToCreate.total} placeholder="total" aria-label="quantity" aria-describedby="addon-wrapping" name="total" disabled/>
                <span className="input-group-text" id="addon-wrapping">Cambio</span>
                <input type="text" className="form-control" value={saleToCreate.change} placeholder="balance" aria-label="quantity" aria-describedby="addon-wrapping" name="change" disabled/>
            </div>
            {loading && <Message bg="bg-primary" message="Registrando venta, espere..." text="text-white"/>}
            {error && <Message bg="bg-danger" message="Error al registrar venta, intenta nuevamente." text="text-white"/>}
            {response && <Message bg="bg-success" message="La venta fue registrada con exito." text="text-white"/>}
            <div className="card">
                <div className="card-body d-flex justify-content-around">
                    <input type="submit" className="btn btn-primary" value="Vender" disabled={response}/>
                    <input type="button" value="Limpiar" className="btn btn-outline-success" onClick={clearForm}/>
                    <input type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close" value="Cerrar" onClick={clearForm}/>
                </div>
            </div>
            
        </form>
    )
}

export default NewSale;
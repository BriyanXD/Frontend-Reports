import { useContext, useEffect, useState } from "react";
import { Sale, SaleError } from "../../../../types";
import SaleContext from "../../../context/sale/SaleContext";
import { useForm } from "../../../hooks/useForm";
import { Message } from "../../messages/Message";


type typesMessage = "delete" | "submit";

const UpdateSale = () => {
    const {saleState, updateSale, saveSale, deleteSale} = useContext(SaleContext);
    const {saleSaved} = saleState

const validationsForm = (formData: Sale) => {
    const errors = {} as SaleError

    if(!formData.quantity) errors.quantity = "El campo 'Cantidad' es requerido."
    else if(formData.quantity - Number(saleSaved?.quantity) > Number(saleSaved?.product?.quantity)) errors.quantity = "El valor del campo 'Cantidad' exede el sock disponible";

    return errors;
}
const messagesTexts = {
    submit : {
        loading: "Guardando, espere...",
        error: "Error al guardar, intenta nuevamente.",
        response: "El registro fue actualizado con exito." 
    },
    delete : {
        loading: "Eliminado, espere...",
        error: "Error al eliminar, intenta nuevamente.",
        response: "El registro fue eliminado." 
    }
}
const [type, setType] = useState<typesMessage>("submit");


const warningsForm = (formData: Sale) => {
    let warnigns = {} as SaleError

    if(formData.total) warnigns.total = "EL campo 'Total' tiene un valor esto impide que el sistema calcule el total de forma automatica, para que el sistema calcule el total envia el campo 'Total' vacio."

    return warnigns;
}

const {handleChange, formData, setFormData, handleBlur, errors, handleSubmit, error, loading, response, warnigns, handleClick}= 
    useForm<Sale>(saleSaved as Sale, validationsForm, warningsForm)

    useEffect(() => {
        setFormData(saleSaved as Sale)
    },[saleSaved])

 return(
    <form className="d-flex flex-column gap-2" onSubmit={e => {setType("submit")
                                                               handleSubmit(e, updateSale)}}>
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
            {loading && <Message bg="bg-primary" message={messagesTexts[type].loading} text="text-white"/>}
            {error && <Message bg="bg-danger" message={messagesTexts[type].error} text="text-white"/>}
            {response && <Message bg="bg-success" message={messagesTexts[type].response} text="text-white"/>}
            <div className="card">
                <div className="card-body d-flex justify-content-around">
                    <input type="submit" className="btn btn-primary" value="Guardar" disabled={loading}/>
                    <button type="button" className="btn btn-outline-danger" onClick={e => {setType("delete")
                                                                                            handleClick(e, deleteSale)}}>Eliminar</button>
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close" onClick={() => saveSale({} as Sale)}>Cerrar</button>
                </div>
            </div>
        </form>
 )
}

export default UpdateSale;
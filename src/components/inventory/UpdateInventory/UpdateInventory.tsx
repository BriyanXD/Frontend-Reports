import { useContext, useEffect } from "react";
import { Inventory, NInventory } from "../../../../types";
import { InventoryContext } from "../../../context/inventory/InventoryContext";
import { useForm } from "../../../hooks/useForm";
import { Message } from "../../messages/Message";


const UpdateInventory = () => {

    const { GetProducts, inventoryState , PostInventory} = useContext(InventoryContext);
    const { inventory } = inventoryState

    useEffect(() => {GetProducts()},[])
    
    const validationsForm = (formData: NInventory) => {
        const errors = {} as NInventory
        if(!formData.productId) errors.productId = "El campo 'Producto' es requerido"
        if(!formData.quantity) errors.quantity = "El campo 'Cantidad' es requerido"
        if(!formData.storage) errors.storage = "El campo 'Almacenamiento' es requerido"
        if(!formData.destiny) errors.destiny = "El campo 'Destino' es requerido"
        if(!formData.entryDate && !formData.exitDate) errors.entryDate = "El campo 'Entrada' o 'Salida' es requerido"
        if(formData.entryDate && formData.exitDate) errors.entryDate = "Solo debe llenar uno de los campos: 'Entrada' o 'Salida'"

        return errors
    }
    
    const {formData, handleChange, handleSubmit, handleBlur, clearForm, response, error, errors, loading, setFormData} = useForm<Inventory>(inventory as Inventory,validationsForm)

    useEffect(() => {setFormData(inventory as Inventory)},[inventory])


    return(
        <form className="d-flex flex-column gap-2" onSubmit={e => handleSubmit(e, PostInventory)}>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Producto</span>
                <input type="text" className="form-control" placeholder="product" aria-label="quantity" aria-describedby="addon-wrapping" value={formData?.prod?.name} name="quantity" onChange={handleChange} onBlur={handleBlur} disabled/>
            </div>
            {errors.productId && <Message bg="bg-danger" message={errors.productId} text="text-white"/>}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Cantidad</span>
                <input type="text" className="form-control" placeholder="quantity" aria-label="quantity" aria-describedby="addon-wrapping" value={formData?.quantity} name="quantity" onChange={handleChange} onBlur={handleBlur} required/>
            </div>
            {errors.quantity && <Message bg="bg-danger" message={errors.quantity} text="text-white"/>}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Entrada</span>
                <input type="date" className="form-control" placeholder="entryDate" aria-label="entryDate" aria-describedby="addon-wrapping" name="entryDate" value={String(formData?.entryDate)} onChange={handleChange} onBlur={handleBlur}/>

                <span className="input-group-text" id="addon-wrapping">Salida</span>
                <input type="date" className="form-control" value={String(formData?.exitDate)} placeholder="exitDate" aria-label="exitDate" aria-describedby="addon-wrapping" name="exitDate" onChange={handleChange} onBlur={handleBlur}/>
            </div>
            {errors.entryDate && <Message bg="bg-danger" message={String(errors.entryDate)} text="text-white"/>}
            {errors.exitDate && <Message bg="bg-danger" message={String(errors.exitDate)} text="text-white"/>}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Origen/Destino</span>
                <input type="text" className="form-control" placeholder="destiny" aria-label="destiny" aria-describedby="addon-wrapping" name="destiny" value={formData?.destiny} onChange={handleChange} onBlur={handleBlur} required/>
            </div>
            {errors.destiny && <Message bg="bg-danger" message={errors.destiny} text="text-white"/>}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Almacenamiento</span>
                <input type="text" className="form-control" placeholder="storage" aria-label="storage" aria-describedby="addon-wrapping" name="storage" value={formData?.storage} onChange={handleChange} onBlur={handleBlur} required/>
            </div>
            {errors.storage && <Message bg="bg-danger" message={errors.storage} text="text-white"/>}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Descripcion</span>
                <input type="text" className="form-control" placeholder="description" aria-label="description" aria-describedby="addon-wrapping" name="description" value={formData?.description} onChange={handleChange}/>
            </div>
            {loading && <Message bg="bg-primary" message="Creando producto espere..." text="text-white"/>}
            {response && <Message bg="bg-success" message="Producto creado." text="text-white"/>}
            {error && <Message bg="bg-danger" message="Error al crear producto intenta nuevamente." text="text-white"/>}
            <div className="card">
                <div className="card-body d-flex justify-content-around">
                    <input type="submit" className="btn btn-primary" value="Agregar" disabled={loading}/>
                    <input type="button" value="Eliminar" className="btn btn-outline-success" onClick={clearForm} disabled/>
                    <input type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close" value="Cerrar" onClick={clearForm} disabled={loading}/>
                </div>
            </div>
        </form>
    )
}

export default UpdateInventory;
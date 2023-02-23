import { useContext, useEffect, useState } from "react";
import { Sale } from "../../../../types";
import SaleContext from "../../../context/sale/SaleContext";
import { useForm } from "../../../hooks/useForm";

const UpdateSale = () => {
    const {saleState, updateSale} = useContext(SaleContext);
    const {saleSaved} = saleState
    
const {handleChange, formData, setFormData} = useForm<Sale>(saleSaved as Sale)

    useEffect(() => {
        setFormData(saleSaved as Sale)
    },[saleSaved])



    const handleSubmit = (event:React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
        updateSale(formData as Sale)
    }

 return(
    <form className="d-flex flex-column gap-2">
        <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">ID</span>
                <input type="text" className="form-control" placeholder="id" aria-label="id" aria-describedby="addon-wrapping" name="id" value={formData?.id} disabled/>
        </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Name</span>
                <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="addon-wrapping" name="name" value={formData?.product?.name} onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Precio</span>
                <input type="text" className="form-control" placeholder="price" aria-label="price" aria-describedby="addon-wrapping" name="price" value={formData?.product?.price} onChange={handleChange} disabled/>

                <span className="input-group-text" id="addon-wrapping">Cantidad</span>
                <input type="text" className="form-control" placeholder="quantity" aria-label="quantity" aria-describedby="addon-wrapping" name="quantity" value={formData?.quantity} onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Total</span>
                <input type="text" className="form-control" placeholder="total" aria-label="total" aria-describedby="addon-wrapping" name="total" value={formData?.total} onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Fecha</span>
                <input type="date" className="form-control" placeholder="createdAt" aria-label="createdAt" aria-describedby="addon-wrapping" name="createdAt" value={formData?.createdAt} disabled/>
                <span className="input-group-text" id="addon-wrapping">Hora</span>
                <input type="text" className="form-control" placeholder="creationTIme" aria-label="creationTIme" aria-describedby="addon-wrapping" name="creationTIme" value={formData?.creationTime} disabled/>
            </div>
            <div className="card">
                <div className="card-body d-flex justify-content-around">
                    <input type="submit" className="btn btn-primary" value="Guardar" onClick={handleSubmit}/>
                    {/* <input type="button" className="btn btn-outline-danger" value="Eliminar" onClick={() => deleteProduct(Number(formData?.id))}/> */}
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                </div>
            </div>
        </form>
 )
}

export default UpdateSale;
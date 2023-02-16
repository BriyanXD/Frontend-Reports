import React, { useContext, useEffect, useState } from "react";
import SaleContext from "../../../context/sale/SaleContext";
import { useForm } from "../../../hooks/useForm";
import { Message } from "../../messages/Message";


interface FormData {
    quantity:string;
    entri:string;
}

const NewSale = () => {
    const { formData, handleChange, clearForm} = useForm<FormData>({
        quantity: "",
        entri: ""
    })
    const { saleState, postNewSale} = useContext(SaleContext);
    const { newSaleCreated, product } = saleState
    const [created, setCreated] = useState<boolean>(false);
    const [errorCreated, setErrorCreated] = useState<boolean>(false);
    const [saleToCreate, setSaleToCreate] = useState({total:0,change:0})
    const [productId, setProductId] = useState<number>(0)

    useEffect(() => {
        /* if(newSaleCreated  === "ERROR_CREATED"){
            setCreated(false)
            setErrorCreated(true)
        } */
        if(typeof newSaleCreated === "object" && newSaleCreated !== null){
            setCreated(true)
            setErrorCreated(false)
        }
    }, [newSaleCreated])

    useEffect(() => {
        setProductId(product?.id || 0)
        setSaleToCreate({...saleToCreate,
        total:Number(Number(formData.quantity) * (product?.price || 0)),
        change: Number(Number(formData.entri) - saleToCreate.total) || 0})},[formData]) 

    const handleSubmit = (event:React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
        postNewSale({productId, quantity:Number(formData.quantity)});
    }


    const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        clearForm()
    }

    return(
        <form className="d-flex flex-column gap-2">
            {created ? <Message setFunction={setCreated} bg="bg-success" text="text-white" message="Venta registrada"/> : null}
            {errorCreated ? <Message setFunction={setErrorCreated} bg="bg-danger" text="text-white" message="Error al registrar venta"/> : null}
            <h5 className="d-flex justify-content-center">{product?.name}</h5>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Cantidad</span>
                <input type="number" className="form-control" value={formData.quantity} placeholder="quantity" aria-label="quantity" aria-describedby="addon-wrapping" name="quantity" onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Entrada</span>
                <input type="number" className="form-control" value={formData.entri} placeholder="entri" aria-label="entri" aria-describedby="addon-wrapping" name="entri" onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Total</span>
                <input type="text" className="form-control" value={saleToCreate.total} placeholder="total" aria-label="quantity" aria-describedby="addon-wrapping" name="total" disabled/>
                <span className="input-group-text" id="addon-wrapping">Cambio</span>
                <input type="text" className="form-control" value={saleToCreate.change} placeholder="balance" aria-label="quantity" aria-describedby="addon-wrapping" name="change" disabled/>
            </div>
            <div className="card">
                <div className="card-body d-flex justify-content-around">
                    <input type="submit" className="btn btn-primary" value="Vender" onClick={handleSubmit} disabled={created || (Number(product?.quantity) < 1)}/>
                    <button className="btn btn-outline-success" onClick={handleClear}>Limpiar</button>
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                </div>
            </div>
            
        </form>
    )
}

export default NewSale;
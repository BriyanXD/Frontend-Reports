import React, { useContext, useEffect, useState } from "react";
import { NSale } from "../../../../types";
import SaleContext from "../../../context/sale/SaleContext";

const NewSale = () => {
    const { saleState, postNewSale} = useContext(SaleContext);
    const { newSaleCreated, product } = saleState
    const [saleToCreate, setSaleToCreate] = useState({
        quantity: 0,
        productId: 0,
        entri:0,
        change:0,
        total:0
    })
    const [created, setCreated] = useState<boolean>(false);
    const [errorCreated, setErrorCreated] = useState<boolean>(false);

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

    useEffect(() => setSaleToCreate({...saleToCreate,
        productId: product?.id || 0,
        total:Number(saleToCreate.quantity * (product?.price || 0)),
        change: Number(saleToCreate.entri - saleToCreate.total) || 0}),[product?.id, saleToCreate]) 

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSaleToCreate({...saleToCreate,
            [event.target.name]:event.target.value})
    }
    const handleSubmit = (event:React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
        const {productId, quantity} = saleToCreate
        postNewSale({productId, quantity});
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
        setSaleToCreate({
            quantity: 0,
            productId: product?.id || 0,
            entri: 0,
            total:0,
            change:0
        })
    }

    return(
        <form className="d-flex flex-column gap-2">
            {created ? renderMessageCreated() : null}
            {errorCreated ? renderMessageErrorCreated() : null}
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Cantidad</span>
                <input type="text" className="form-control" value={saleToCreate.quantity} placeholder="quantity" aria-label="quantity" aria-describedby="addon-wrapping" name="quantity" onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Entrada</span>
                <input type="text" className="form-control" value={saleToCreate.entri} placeholder="entri" aria-label="entri" aria-describedby="addon-wrapping" name="entri" onChange={handleChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Total</span>
                <input type="text" className="form-control" value={saleToCreate.total} placeholder="total" aria-label="quantity" aria-describedby="addon-wrapping" name="total" disabled/>
                <span className="input-group-text" id="addon-wrapping">Cambio</span>
                <input type="text" className="form-control" value={saleToCreate.change} placeholder="balance" aria-label="quantity" aria-describedby="addon-wrapping" name="change" disabled/>
            </div>
            <div className="card">
                <div className="card-body d-flex justify-content-around">
                    <input type="submit" className="btn btn-primary" value="Vender" onClick={handleSubmit}/>
                    <button className="btn btn-outline-success" onClick={clearForm}>Limpiar</button>
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                </div>
            </div>
            
        </form>
    )
}

export default NewSale;
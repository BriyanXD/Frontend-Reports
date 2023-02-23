import { useContext, useEffect } from "react";
import Modal from "../../modal/Modal";
import SaleContext from "../../../context/sale/SaleContext";
import CardSale from "../CardSale/CardSale";
import styles from "./style.module.css"
import UpdateSale from "../UpdateSale/UpdateSale";

const ContainerSale =() => {
    const { saleState, getAllSales, saveSale } = useContext(SaleContext)
    const { sales } = saleState;

    useEffect(() => getAllSales(),[])

    /* if(loading) return( <div className="container d-flex justify-content-center bg-success"><h1>Cargando...</h1></div> )
    if(error) return( <div className="container d-flex justify-content-center bg-danger"><h1>Error</h1></div> ) */
    return(
        <div className={`container d-flex flex-column gap-1 ${styles.container}`}>
            <Modal key="UPDATESALE" id="UPDATESALE" title="Modificar venta">
                <UpdateSale/>
            </Modal>
            <table className="table table-hover table-borderless">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">P/unidad</th>
                    <th scope="col">Total</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Configs</th>
                </tr>
            </thead>
            <tbody>
            {   
                sales?.map((sale, index) => <CardSale
                    props={{saveSale}}
                    index={index + 1}
                    key={sale?.id}
                    sale={sale}/>)
            }
            </tbody>
            </table>
        </div>
    )
}

export default ContainerSale;
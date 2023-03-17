import { useContext, useEffect } from "react";
import Modal from "../../modal/Modal";
import SaleContext from "../../../context/sale/SaleContext";
import CardSale from "../CardSale/CardSale";
import styles from "./style.module.css"
import UpdateSale from "../UpdateSale/UpdateSale";
import { Table } from "../../table/Table";
import { useAuth0 } from "@auth0/auth0-react";

const ContainerSale =() => {
    const { saleState, getAllSales, saveSale } = useContext(SaleContext)
    const { sales, loading, error } = saleState;

    useEffect(() => getAllSales(),[])
    const {isAuthenticated} = useAuth0()

    
    if(!isAuthenticated) return <></>
    if(loading) return( <div className="container d-flex justify-content-center bg-success"><h1>Cargando...</h1></div> )
    if(error) return( <div className="container d-flex justify-content-center bg-danger"><h1>Error</h1></div> )
    return(
        <div className={`container d-flex flex-column gap-1 ${styles.container}`}>
            <Modal key="UPDATESALE" id="UPDATESALE" title="Modificar venta">
                <UpdateSale/>
            </Modal>
            <Table titles={["#","Product","Cantidad","P/Unidad","Total","Fecha","Hora","Config"]} key="Sales">
                {   
                    sales?.map((sale, index) => <CardSale
                        props={{saveSale}}
                        index={index + 1}
                        key={sale?.id}
                        sale={sale}/>)
                }
            </Table>
        </div>
    )
}

export default ContainerSale;
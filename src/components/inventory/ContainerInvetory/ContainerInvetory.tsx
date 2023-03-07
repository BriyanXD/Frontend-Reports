import {useContext, useEffect } from "react"
import { InventoryContext } from "../../../context/inventory/InventoryContext"
import { Table } from "../../table/Table"
import { CardInventory } from "../CardInventory/CardInventory"
import Modal from "../../modal/Modal"
import styles from "./styles.module.css";
import UpdateInventory from "../UpdateInventory/UpdateInventory"
export const ContainerInventory = () => {

    const { inventoryState, GetInvontories, SetInventory } = useContext(InventoryContext)
    const { inventories, error, loading } = inventoryState;
    useEffect(() => {GetInvontories()},[])

    if(error) return( <div className="container d-flex justify-content-center bg-danger"><h1>Error</h1></div> )
    if(loading) return( <div className="container d-flex justify-content-center bg-success"><h1>Cargando...</h1></div> )
    return(
        <div className={`container  ${styles.container}`}>
            <Modal id="UPDATEINVENTORY" title="Actualizar registro" key={"UPDATEINVENTORY"}>
                <UpdateInventory/>
            </Modal>
            <Table titles={["#","Nombre","Entrada","Salida","Destino/Origen","Detalles"]}>
                {inventories?.map((element, index) => <CardInventory
                item={element}
                index={index+1}
                key={element.id}
                setInventory={SetInventory}
                />)}
            </Table>
        </div>
    )
}
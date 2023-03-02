import { useContext, useEffect } from "react"
import { InventoryContext } from "../../../context/inventory/InventoryContext"
import { Table } from "../../table/Table"
import { CardInventory } from "../CardInventory/CardInventory"
import Modal from "../../modal/Modal"
import NewInventory from "../NewInventory/NewInventory"

export const ContainerInventory = () => {


    const { inventoryState, GetInvontories } = useContext(InventoryContext)
    const { inventories, error, loading } = inventoryState;

    useEffect(() => {GetInvontories()},[])
    
    if(error) return( <div className="container d-flex justify-content-center bg-danger"><h1>Error</h1></div> )
    if(loading) return( <div className="container d-flex justify-content-center bg-success"><h1>Cargando...</h1></div> )
    return(
        <div className="container">
            <Modal id="NEWINVENTORY" title="Crear registro" key="NEWINVENTORY">
                <NewInventory/>
            </Modal>
            <Table titles={["#","Nombre","Entrada","Salida","Destino","Detalles"]}>
                {inventories?.map((element, index) => <CardInventory
                item={element}
                index={index+1}
                key={element.id}/>)}
            </Table>
        </div>
    )
}
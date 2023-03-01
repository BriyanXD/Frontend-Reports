import { useContext, useEffect } from "react"
import { InventoryContext } from "../../../context/inventory/InventoryContext"
import { Table } from "../../table/Table"
import { CardInventory } from "../CardInventory/CardInventory"

export const ContainerInventory = () => {


    const { inventoryState, GetInvontories } = useContext(InventoryContext)
    const { inventories } = inventoryState;

    useEffect(() => {GetInvontories()},[])

    return(
        <div className="container">
            <Table titles={["#","Nombre","Entrada","Salida","Destino","Detalles"]}>
                {inventories?.map((element, index) => <CardInventory
                item={element}
                index={index+1}
                key={element.id}/>)}
            </Table>
        </div>
    )
}
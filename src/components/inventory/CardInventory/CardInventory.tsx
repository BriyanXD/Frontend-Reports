import { Inventory } from "../../../../types"

interface TypeProps {
    item: Inventory,
    index: number;
    setInventory: (inventory:Inventory) => void
}

export const CardInventory = ({item, index, setInventory}:TypeProps) => {
    return (
        <tr>
            <th>{index}</th>
            <th>{item?.prod?.name}</th>
            <th>{item?.entryDate && String(item.entryDate)}</th>
            <th>{item?.exitDate && String(item.exitDate)}</th>
            <th>{item?.destiny}</th>
            <th>
            <button
                className="btn btn-primary"
                type="button" value="Vender"
                data-bs-toggle="modal"
                data-bs-target="#UPDATEINVENTORY"
                onClick={() => setInventory(item)}>
                    Editar
            </button>
            </th>
        </tr>
    )
}
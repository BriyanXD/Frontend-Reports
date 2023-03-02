import { Inventory } from "../../../../types"

interface TypeProps {
    item: Inventory,
    index: number;
}

export const CardInventory = ({item, index}:TypeProps) => {
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
                data-bs-target="#NEWINVENTORY">
                    Ver
            </button>
            </th>
        </tr>
    )
}
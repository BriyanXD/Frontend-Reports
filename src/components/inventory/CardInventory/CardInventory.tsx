import { Inventory } from "../../../../types"

interface TypeProps {
    item: Inventory,
    index: number;
}

export const CardInventory = ({item, index}:TypeProps) => {
    return (
        <tr>
            <th>{index}</th>
            <th>{item.destiny}</th>
            <th>{String(item.entryDate)}</th>
            <th>{String(item.exitDate)}</th>
            <th>{item.destiny}</th>
            <th>
                <button className="btn btn-success">
                    Ver
                </button>
            </th>
        </tr>
    )
}
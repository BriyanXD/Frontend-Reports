import { Inventory, InventoryState } from "../../../types";
import { createContext } from "react";

export type InventoryContextProps = {
    inventoryState: InventoryState;
    GetInvontories: () => void ;
    GetProducts: () => void;
    PostInventory: (element:Inventory) => Promise<Object>;
    FilterInventories: (type:string, date:string) => void
    FilterByName: (name:string) => void;
    SetInventory: (inventory:Inventory) => void
    UpdateInventory: (inventory:Inventory) => Promise<Object>
    DeleteInventory: () => Promise<Object>
}

export const InventoryContext = createContext<InventoryContextProps>({} as InventoryContextProps)
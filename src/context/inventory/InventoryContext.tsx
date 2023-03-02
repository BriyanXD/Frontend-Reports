import { Inventory, InventoryState } from "../../../types";
import { createContext } from "react";

export type InventoryContextProps = {
    inventoryState: InventoryState;
    GetInvontories: () => void ;
    GetProducts: () => void;
    PostInventory: (element:Inventory) => Promise<Object>;
}

export const InventoryContext = createContext<InventoryContextProps>({} as InventoryContextProps)
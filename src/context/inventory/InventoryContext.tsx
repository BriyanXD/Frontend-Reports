import { InventoryState } from "../../../types";
import { createContext } from "react";

export type InventoryContextProps = {
    inventoryState: InventoryState;
    GetInvontories: () => Promise<{}> ;
}

export const InventoryContext = createContext<InventoryContextProps>({} as InventoryContextProps)
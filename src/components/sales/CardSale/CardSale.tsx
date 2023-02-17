import React, { useRef } from "react";
import { Sale } from "../../../../types";
import { formatDate } from "../../../utils/formatDate";
import { formaTime } from "../../../utils/formaTime";

interface TypeProps {
    sale: Sale;
    index: number;
}

const CardSale = ({sale, index}: TypeProps) => {

    const thRef = useRef<any>()

    async function copyTextToClipboard(/* event: React.MouseEvent<HTMLTableCellElement> */) {
        thRef.current.select();
        document.execCommand("copy", true)
      }


    return(
        <tr>
                    <th className="text-danger">{index}</th>
                    <th className="text-primary" onClick={copyTextToClipboard} >
                        <input className="form-control" ref={thRef} type="text" value={sale?.product?.name} readOnly/>
                    </th>
                    <td>{sale?.quantity}</td>
                    <td>{sale?.product?.price}Bs.</td>
                    <td>{sale?.total}Bs.</td>
                    <td>{formatDate(sale?.createdAt)}</td>
                    <td>{formaTime(sale?.creationTime)}</td>
                    <td><input className="btn btn-success"
                            type="button" value="Modificar"
                            data-bs-toggle="modal"
                            data-bs-target="#UPDATEPRODUCT"
                            disabled
                    /></td>
            </tr>
    )
}

export default CardSale;
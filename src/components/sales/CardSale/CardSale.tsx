import React, { useRef } from "react";
import { Sale } from "../../../../types";
import { copyTextToClipboard } from "../../../utils/copyText";
import { formatDate } from "../../../utils/formatDate";
import { formaTime } from "../../../utils/formaTime";

interface TypeProps {
    sale: Sale;
    index: number;
    props: {saveSale:(sale:Sale) => void};
}

const CardSale = ({sale, index, props}: TypeProps) => {

    const { saveSale } = props

    const inputRef = useRef<HTMLInputElement>(null)

    return(
        <tr>
                    <th className="text-danger">{index}</th>
                    <th className="text-primary" onClick={() => copyTextToClipboard(inputRef.current as HTMLInputElement)} >
                        <input className="form-control" ref={inputRef} type="text" value={sale?.product?.name} readOnly/>
                    </th>
                    <td>{sale?.quantity}</td>
                    <td>{sale?.product?.price}Bs.</td>
                    <td>{sale?.total}Bs.</td>
                    <td>{formatDate(sale?.createdAt)}</td>
                    <td>{formaTime(sale?.creationTime)}</td>
                    <td><input className="btn btn-success"
                            type="button" value="Modificar"
                            data-bs-toggle="modal"
                            data-bs-target="#UPDATESALE"
                            onClick={() => saveSale(sale)}
                    /></td>
            </tr>
    )
}

export default CardSale;
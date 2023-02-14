import { Sale } from "../../../../types";

interface TypeProps {
    sale: Sale;
    index: number;
}

const CardSale = ({sale, index}: TypeProps) => {
    return(
        <tr>
                    <th>{index}</th>
                    <th>{sale?.product?.name}</th>
                    <td>{sale?.quantity}</td>
                    <td>{sale?.product?.price}Bs.</td>
                    <td>{sale?.total}Bs.</td>
                    <td><input className="btn btn-success"
                            	type="button" value="Modificar"
                                data-bs-toggle="modal"
                                data-bs-target="#UPDATEPRODUCT"
                                onClick={() => (sale)}
                    /></td>
            </tr>
    )
}

export default CardSale;
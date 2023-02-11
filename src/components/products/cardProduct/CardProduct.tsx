import { Product } from "../../../../types";

interface TypeProps{
    product:Product;
    setProductToUpdated:(product:Product) => void
    index:number
}

const CardProduct = ({product, index, setProductToUpdated}: TypeProps) => {
    return(
        <tr className={`${product?.condition}`}>
                    <th>{index}</th>
                    <th>{product?.name}</th>
                    <td>{product?.quantity}</td>
                    <td>{product?.price}Bs.</td>
                    <td data-bs-toggle="tooltip" data-bs-placement="top" title="unidad">{product?.unit}</td>
                    <td><input className="btn btn-success"
                            	type="button" value="Modificar"
                                data-bs-toggle="modal"
                                data-bs-target="#UPDATEPRODUCT"
                                onClick={() => setProductToUpdated(product)}
                    /></td>
            </tr>
    )
}

export default CardProduct
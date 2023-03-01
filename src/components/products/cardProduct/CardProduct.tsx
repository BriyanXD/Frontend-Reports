import { Product } from "../../../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

interface TypeProps{
    product:Product;
    setProductToUpdated:(product:Product) => void
    setProductId:(productId:Product) => void
    index:number
}

const CardProduct = ({product, index, setProductToUpdated, setProductId}: TypeProps) => {
    return(
        <tr className={`${product?.condition}`}>
                    <th>{index}</th>
                    <th>{product?.name}</th>
                    <td>{product?.quantity}</td>
                    <td>{product?.price}Bs.</td>
                    <td data-bs-toggle="tooltip" data-bs-placement="top" title="unidad">{product?.unit}</td>
                    <td>
                        <button
                                className="btn btn-primary"
                                type="button" value="Vender"
                                data-bs-toggle="modal"
                                data-bs-target="#NEWSALE"
                                onClick={() => setProductId(product)}>
                                <FontAwesomeIcon icon={faCartPlus}/>
                        </button>
                    </td>
                    <td>
                        <button
                                className="btn btn-warning"
                                type="button" value="Modificar"
                                data-bs-toggle="modal"
                                data-bs-target="#UPDATEPRODUCT"
                                onClick={() => setProductToUpdated(product)}>
                                <FontAwesomeIcon icon={faPenToSquare}/>
                        </button>
                    </td>
            </tr>
    )
}

export default CardProduct
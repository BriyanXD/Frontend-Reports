import { useContext, useEffect, useState } from "react";
import CardProduct from "../cardProduct/CardProduct";
import styles from "./styles.module.css";
import { ProductContext } from "../../../context/product/ProductContext";
import Modal from "../../modal/Modal";
import UpdateProduct from "../updateProduct/UpdateProduct";
const ContainerProduct = () => {

    const { productState, getProducts,setProductToUpdated } = useContext(ProductContext)
    const { products, error, loading } = productState;

    useEffect(() => getProducts(),[])

    if(loading) return( <div className="container d-flex justify-content-center bg-success"><h1>Cargando...</h1></div> )
    if(error) return( <div className="container d-flex justify-content-center bg-danger"><h1>Error</h1></div> )
    return(
        <div className={`container d-flex flex-column gap-1 ${styles.container}`}>
            <Modal id="UPDATEPRODUCT" title="Modificar producto">
                <UpdateProduct/>
            </Modal>
            <table className="table table-hover table-borderless">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Unidad</th>
                    <th scope="col">Configs</th>
                </tr>
            </thead>
            <tbody>
            {
                products?.map((product, index) => <CardProduct
                    index={index+1}
                    key={product?.id}
                    product={product}
                    setProductToUpdated={setProductToUpdated}/>)
            }
            </tbody>
            </table>
        </div>
    )
}

export default ContainerProduct;
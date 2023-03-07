import { useContext, useEffect, useState } from "react";
import CardProduct from "../cardProduct/CardProduct";
import styles from "./styles.module.css";
import { ProductContext } from "../../../context/product/ProductContext";
import Modal from "../../modal/Modal";
import UpdateProduct from "../updateProduct/UpdateProduct";
import NewSale from "../../sales/NewSale/NewSale";
import SaleContext from "../../../context/sale/SaleContext";
import { Table } from "../../table/Table";

const ContainerProduct = () => {

    const { productState, getProducts,setProductToUpdated } = useContext(ProductContext)
    const { setProductId } = useContext( SaleContext )
    const { products, error, loading } = productState;

    useEffect(() => {getProducts()},[])
    

    if(loading) return( <div className="container d-flex justify-content-center bg-success"><h1>Cargando...</h1></div> )
    if(error) return( <div className="container d-flex justify-content-center bg-danger"><h1>Error</h1></div> )
    return(
        <div className={`container ${styles.container}`}>
            <Modal key="UPDATEPRODUCT" id="UPDATEPRODUCT" title="Modificar producto">
                <UpdateProduct/>
            </Modal>
            <Modal key="NEWSALE" id="NEWSALE" title="Formulario de venta">
                <NewSale/>
            </Modal>
            <Table titles={["#","Nombre","Cantidad","Precio","Unidad","Config"]} key="Products">
            {
                products?.map((product, index) => <CardProduct
                    index={index+1}
                    key={product?.id}
                    product={product}
                    setProductToUpdated={setProductToUpdated}
                    setProductId={setProductId}
                    />)
            }
            </Table>
        </div>
    )
}

export default ContainerProduct;
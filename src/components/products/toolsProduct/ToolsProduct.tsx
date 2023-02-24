import { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import NewProduct from "../newProduct/NewProduct";
import style from "./styles.module.css"
import { ProductContext } from "../../../context/product/ProductContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";


const ToolProduct = () => {

    const [word, setWord] = useState("");

     const { searchProducts, filterProducts } = useContext(ProductContext)


    const handleChangeinputSearch = (event:React.ChangeEvent<HTMLInputElement>) => setWord(event.target.value)
    const handleChangeOptionCategories = (event:React.ChangeEvent<HTMLSelectElement>) => filterProducts(event.target.value)
    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchProducts(word)
    }

    return(
        <div className={`container d-flex justify-content-evenly align-items-center ${style.container} flex-wrap`}>
                <button type="button" className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#NEWPRODUCT">
                    <FontAwesomeIcon icon={faSquarePlus} />
                </button>
                <div className="input-group w-50">
                    <span className="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faFilter}/></span>
                    <select className="form-select" aria-label="Default select example" name="category" onChange={handleChangeOptionCategories}>
                        <option value="all">Todos</option>
                        <option value="bio-seguridad">Bio-seguridad</option>
                        <option value="alimento">Alimento</option>
                        <option value="limpieza">Limpieza</option>
                        <option value="uniforme">Uniforme</option>
                        <option value="insumo">Insumo</option>
                    </select>
                </div>
                <form className="d-flex gap-2" role="search" onSubmit={handleSubmitForm}>
                    <input className="form-control border border-primary"  type="search" placeholder="Buscar..." aria-label="Search" onChange={handleChangeinputSearch}/>
                    <button type="submit" className="btn btn-outline-primary"><FontAwesomeIcon icon={faMagnifyingGlass}/> </button>
                </form>
            <Modal id="NEWPRODUCT" title="Agregar producto">
                <NewProduct/>
            </Modal>
        </div>
    )
}

export default ToolProduct;
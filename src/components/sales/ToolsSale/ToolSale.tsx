import { useContext, useState } from "react";
import { ProductContext } from "../../../context/product/ProductContext";
import Modal from "../../modal/Modal";
import NewProduct from "../../products/newProduct/NewProduct";
import style from "./style.module.css"

const ToolSale = () => {
    const [word, setWord] = useState("");

    const { searchProducts, filterProducts } = useContext(ProductContext)


   const handleChangeinputSearch = (event:React.ChangeEvent<HTMLInputElement>) => setWord(event.target.value)

   const handleChangeOptionCategories = (event:React.ChangeEvent<HTMLSelectElement>) => filterProducts(event.target.value)


   return(
       <div className={`container d-flex justify-content-evenly align-items-center ${style.container}`}>
               {/* <button type="button" className="btn btn-primary"
               data-bs-toggle="modal"
               data-bs-target="#NEWPRODUCT">
                   Agregar producto
               </button> */}
               <div className="input-group w-50">
                   <span className="input-group-text" id="addon-wrapping">Categoria</span>
                   <select className="form-select" aria-label="Default select example" name="category" onChange={handleChangeOptionCategories}>
                       <option value="all">Todos</option>
                       <option value="bio-seguridad">Bio-seguridad</option>
                       <option value="alimento">Alimento</option>
                       <option value="limpieza">Limpieza</option>
                       <option value="uniforme">Uniforme</option>
                       <option value="insumo">Insumo</option>
                   </select>
               </div>
               <form className="d-flex gap-2" role="search">
                   <input className="form-control border border-info"  type="search" placeholder="Buscar..." aria-label="Search" onChange={handleChangeinputSearch}/>
                   <input type="button" className="btn btn-outline-primary" value="Buscar" onClick={() => searchProducts(word)}/>
               </form>
           <Modal id="NEWPRODUCT" title="Agregar producto">
               <NewProduct/>
           </Modal>
       </div>
   )
}

export default ToolSale;
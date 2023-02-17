import { useContext, useState } from "react";
import SaleContext from "../../../context/sale/SaleContext";
import Modal from "../../modal/Modal";
import NewProduct from "../../products/newProduct/NewProduct";
import style from "./style.module.css"

const ToolSale = () => {
    const [word, setWord] = useState("");
    const [customDate, setCustomDate] = useState({ key:"", date:"" })
    
    const { getSalesByData } = useContext(SaleContext)

    const handleChangeinputSearch = (event:React.ChangeEvent<HTMLInputElement>) => setWord(event.target.value)
    const handleChangeOptionCategories = (event:React.ChangeEvent<HTMLSelectElement>) => setCustomDate({...customDate,key:event.target.value})    
    const handleChangeDateSearch = (event: React.ChangeEvent<HTMLInputElement>) => getSalesByData({key:"createdAt",value:event.target.value})

   return(
       <div className={`container d-flex justify-content-evenly align-items-center ${style.container}`}>
               <div className="input-group w-50">
                   <span className="input-group-text" id="addon-wrapping">Categoria</span>
                   <select className="form-select" aria-label="Default select example" name="category" onChange={handleChangeOptionCategories}>
                       <option value="all">Todos</option>
                       <option value="hour">Hora</option>
                       <option value="day">Dia</option>
                       <option value="week">Semana</option>
                       <option value="boce">Mes</option>
                       <option value="custom">Personalizado</option>
                   </select>
               </div>
               {
                customDate.key === "custom"?
                   <form className="d-flex gap-2" role="search">
                   <input className="form-control border border-primary"  type="date" aria-label="Search" onChange={handleChangeDateSearch}/>
               </form>: null
               }
               <form className="d-flex gap-2" role="search">
                   <input className="form-control border border-primary"  type="search" placeholder="Buscar..." aria-label="Search" onChange={handleChangeinputSearch}/>
                   <input type="button" className="btn btn-outline-primary" value="Buscar" onClick={() => getSalesByData({value:word,key:"name"})}/>
               </form>
           <Modal id="NEWPRODUCT" title="Agregar producto">
               <NewProduct/>
           </Modal>
       </div>
   )
}

export default ToolSale;
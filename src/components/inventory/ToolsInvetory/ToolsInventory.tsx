import { useContext, useRef, useState } from "react";
import Modal from "../../modal/Modal";
import style from "./styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
import NewInventory from "../NewInventory/NewInventory";
import { InventoryContext } from "../../../context/inventory/InventoryContext";


const ToolInventory = () => {

    const [word, setWord] = useState("");

     const {FilterInventories, FilterByName} = useContext(InventoryContext)

     const refDate = useRef<HTMLInputElement>(null);
     const refOption = useRef<HTMLSelectElement>(null);


    const handleChangeinputSearch = (event:React.ChangeEvent<HTMLInputElement>) => setWord(event.target.value)
    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        
        const date = refDate?.current?.value;
        const type = refOption?.current?.value;

        console.log(date);
        console.log(type);        

        FilterInventories(String(type), String(date))
    }
    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        FilterByName(word)
    }

    return(
        <div className={`container d-flex justify-content-evenly align-items-center ${style.container} flex-wrap`}>
                <button type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#NEWINVENTORY">
                    <FontAwesomeIcon icon={faSquarePlus} />
                </button>
                <div className="input-group w-50 ">
                    <span className="input-group-text border border-primary" id="addon-wrapping"><FontAwesomeIcon icon={faFilter}/></span>
                    <select className="form-select border border-primary" aria-label="Default select example" name="category" onChange={handleChangeSearch} ref={refOption}>
                        <option value="all">Todos</option>
                        <option value="entryDate">Entradas</option>
                        <option value="exitDate">Salidas</option>
                    </select>
                </div>
                <form className="d-flex gap-2" role="search">
                   <input className="form-control border border-primary" ref={refDate} type="date" aria-label="Search" onChange={handleChangeSearch}/>
               </form>
                <form className="d-flex gap-2" role="search" onSubmit={handleSubmitForm}>
                    <input className="form-control border border-primary"  type="search" placeholder="Buscar..." aria-label="Search" onChange={handleChangeinputSearch}/>
                    <button type="submit" className="btn btn-outline-primary"><FontAwesomeIcon icon={faMagnifyingGlass}/> </button>
                </form>
                <Modal id="NEWINVENTORY" title="Crear registro" key="NEWINVENTORY">
                    <NewInventory/>
                </Modal>
        </div>
    )
}

export default ToolInventory;
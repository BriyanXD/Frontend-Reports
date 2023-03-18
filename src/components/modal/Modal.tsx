import style from "./Modal.module.css"


interface TypeProps {
  children: JSX.Element;
  id:string;
  title:string;
}

const Modal = ({children, id, title}:TypeProps) => {
    return(
      <div className={`modal fade ${style.container}`}
       id={id}
        tabIndex={-1}
         aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          /* data-bs-backdrop="static" */
          >
      <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable`}>
        <div className={`modal-content ${style.content}`}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
    )
}
export default Modal;
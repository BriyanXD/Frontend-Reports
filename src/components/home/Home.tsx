import { useEffect } from "react";

const Home = () => {

    return(
        <div className="container">
            <div className="card mb-3">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <span>Notas</span>
                    <input type="button" value="agregar" className="btn btn-outline-danger"/>
                </div>
                <div className="card-body bg-dark text-white">
                    <h5 className="card-title">Titulo de la nota</h5>
                    <p className="card-text">Cuerpo de la nota</p>
                </div>
                <div className="card-body bg-success text-white">
                    <h5 className="card-title">Primary card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-body bg-warning text-white">
                    <h5 className="card-title">Primary card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-body bg-primary text-white">
                    <h5 className="card-title">Primary card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-body bg-danger text-white">
                    <h5 className="card-title">Primary card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>     
        </div>
    )
}
export default Home;
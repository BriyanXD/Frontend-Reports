import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import style from "./Home.module.css"
import useLogin from "../../hooks/useLogin";
import { User } from "../../../types";

const initialSatete = {username:"",password:""};

const Home = () => {

    
    const functionSubmit = (user:User) => {
        console.log(user);
    }
    const { handleChange, handleSubmit } = useLogin<User>(initialSatete, functionSubmit);

    return(
        <div className="container d-flex justify-content-center">
            <div className={`${style.card}`}>
                <FontAwesomeIcon className={style.icon} icon={faHouseUser}/>
                <form  className={style.form} onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label className="form-text" htmlFor="username">Usuario</label>
                        <input className="form-control" type="text" id="username" name="username" onChange={handleChange}/>
                    </div>
                    <div>
                        <label className="form-text" htmlFor="password">Contrasena</label>
                        <input className="form-control" type="password" id="password" name="password" onChange={handleChange}/>
                    </div>
                    <button className="btn btn-outline-primary" type="submit"> Ingresar </button>
                </form>
            </div>     
        </div>
    )
}
export default Home;
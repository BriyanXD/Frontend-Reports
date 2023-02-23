import { useState } from "react"

export const useForm = <T extends Object>(initState: T, validateForm:Function) => {

    const [formData, setFormData] = useState(initState);
    const [errors, setErrors] = useState({} as  T);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(false);
    const [error, setError] = useState(false);


    const handleChange = ({target}:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        handleChange(event);
        setErrors(validateForm(formData));
    }

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>, callback: Function) => {
        event.preventDefault();
        setErrors(validateForm(formData));
        if(Object.keys(errors).length === 0){
            alert("Enviando Formulario")
            setLoading(true);

            //*! Esta funcion ejecuta la logica del envie del formulario
            let response = await callback(formData);
            
            setLoading(false)
            if(response.statusText === "OK"){
                setResponse(true)
                setTimeout(() => setResponse(false),5000)
            }
            else {
                setError(true)
                setTimeout(() => setError(false),5000)
            }
        }else{
            return
        }
    }

    const clearForm = () => {
        let stateReseted = {}
        for(let key in formData) stateReseted = {...stateReseted, [key]:""}
        setFormData(stateReseted as T)
    }
    return{
        formData,
        errors,
        loading,
        response,
        error,
        handleChange,
        clearForm,
        handleBlur,
        handleSubmit,
        setFormData
    }
}
import React, { useState } from "react"

export const useForm = <T extends Object>(initState: T, validateForm:Function, warningsForm?: Function) => {

    const [formData, setFormData] = useState<T>(initState);
    const [errors, setErrors] = useState({} as  T);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(false);
    const [error, setError] = useState(false);
    const [warnigns, setWarinings]= useState({} as T)


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
        warningsForm && setWarinings(warningsForm(formData));
    }

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>, callback: Function) => {
        event.preventDefault();
        setErrors(validateForm(formData));
        warningsForm && setWarinings(warningsForm(formData));

        if(Object.keys(errors).length === 0){
            setLoading(true);
            //*! Esta funcion ejecuta la logica del envie del formulario
            let response = await callback(formData);
            setLoading(false)
            setWarinings({} as T)
            console.log(response);
            if(response.statusText === "OK" || response.status === 200){
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

    const handleClick = async(event: React.MouseEvent<HTMLInputElement| HTMLButtonElement>, callback: Function) => {
        event.preventDefault();
            setLoading(true);
            //*! Esta funcion ejecuta la logica del envie del formulario
            let response = await callback(formData);
            setLoading(false)
            setWarinings({} as T)
            if(response.statusText === "OK" || response.status === 200){
                setResponse(true)
                setTimeout(() => setResponse(false),5000)
            }
            else {
                setError(true)
                setTimeout(() => setError(false),5000)
            }
    }

    const clearForm = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        let stateReseted = {}
        for(let key in formData) stateReseted = {...stateReseted, [key]:""}
        setFormData(stateReseted as T)
        setErrors({} as T)
        setWarinings({} as T)
    }
    return{
        formData,
        errors,
        loading,
        response,
        error,
        warnigns,
        handleChange,
        clearForm,
        handleBlur,
        handleSubmit,
        handleClick,
        setFormData
    }
}
import { useState } from "react"

export const useForm = <T extends Object>(initState: T) => {

    const [formData, setFormData] = useState(initState)

    const handleChange = ({target}:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const clearForm = () => {
        let stateReseted = {}
        for(let key in formData) stateReseted = {...stateReseted, [key]:""}
        setFormData(stateReseted as T)
    }
    return{
        formData,
        handleChange,
        clearForm,
        setFormData
    }
}
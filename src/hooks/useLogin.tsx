import { ChangeEvent, FormEvent, useState } from "react";

export default function useLogin<T extends Object>(initialState: T, functionSubmit: Function) {
    const [user, setUser] = useState<T>(initialState);

    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        setUser({...user,[target.name]:target.value});    
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        functionSubmit(user);
    }
  return {user, handleChange, handleSubmit}
}

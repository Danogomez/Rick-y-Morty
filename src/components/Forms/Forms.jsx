import { useEffect, useState } from "react";
import style from "./Forms.module.css";

const Forms = () => {
    const [forms, setForms] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState('');

    const validate = ()=>{
        if(/\S+@\S+\.\S+/.test(forms.email)){
            setErrors('')
        } else {
            setErrors('El email es invalido.')
        }
    }

    useEffect(()=> {
        validate()
    }, [forms])

    const handleFormChange = (event) => {
        const name= event.target.name 
        const value= event.target.value 
        setForms({
            ...forms, 
            [name]: value
        })
    };
    const handleSubmit = (event) => {
            event.preventDefault()
    };

    return (
        <div className= {style.container}>
            <form onSubmit={handleSubmit}>
                <h1>IMAGEN ACA</h1>
                <label htmlFor="email"> Email: </label>
                <input value={forms.email} onChange={handleFormChange}  type="text" name= "email" />
                <hr />
                {errors!== '' ? <p>{errors}</p> : ''}
                <label htmlFor="password"> Password:</label>
                <input value= {forms.password} onChange={handleFormChange} type="text" name="password" />
                <hr />
                <button type="submit">ENVIAR</button>
            </form>
        </div>
    )
};

export default Forms;

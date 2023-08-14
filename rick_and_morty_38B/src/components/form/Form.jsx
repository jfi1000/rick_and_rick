import { useState } from 'react';
import validation from './validation.js'

export default function Nav(props) {
    const [errors,setErrors] = useState({});

    const [userData,setUserData] = useState(
        {
            email:"",
            password:""
        }
    );
    const handleChange = (event) =>{
        setUserData(
            {...userData,
            [event.target.name]: event.target.value}
        );

        setErrors( 
        validation({
            ...userData,
            [event.target.name]: event.target.value
            }
        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
        setErrors({...errors, login: "Datos incorrectos"})

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="email" 
                name='email' 
                value={userData.email || ''} 
                placeholder="Email" 
                onChange={handleChange}/>
                    <p>{errors.email}</p>
                <input 
                type="password" 
                name='password' 
                value={userData.password || ''} 
                placeholder="Password" 
                onChange={handleChange} />
                                <p>{errors.password}</p>
                <button type='submit'> Iniciar</button>
                <p>{errors.login} </p>

            </form>

        </div>

    );
}

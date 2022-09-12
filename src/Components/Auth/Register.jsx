import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {setToken,getToken} from '../../Services/Auth'
import {register} from '../../API/AuthAPI'
import {useNavigate} from 'react-router-dom'
function Register({setShowRegister}){

    const navigate = useNavigate();
    const [user,setUser] = useState({email:'',password:''});

    function updateUser (event){
        const value= event.target.value;
        setUser({
            ...user,
            [event.target.name]: value
        });
    }

    async function sendRegister(event){
        event.preventDefault();
        try{
            const response = await register(user);
            setToken(response.data);
            console.log(getToken())
            navigate("/")
        }
        catch(error){
            console.log(error);
        }
    }

    return  <div className="d-flex flex-column align-items-center">
        <h1>Registrar nova conta</h1>
    <Form className="col-3 mt-5" onSubmit={(event)=>sendRegister(event)}>
        <Form.Label>Insira seu e-mail</Form.Label>
        <Form.Control name="email" type="text" onChange={(event)=>{updateUser(event)}} ></Form.Control>
        <Form.Label>Insira sua senha</Form.Label>
        <Form.Control name="password" type="password" onChange={(event)=>{updateUser(event)}} ></Form.Control>
        <div className='d-flex justify-content-between'>
        <Button className="mt-1" variant="success" type="submit">Registrar</Button>
        <Button variant="primary" className="mt-1 ml-3" onClick={()=>setShowRegister((prevState)=>!prevState)}>Voltar para o login</Button>
        </div>
    </Form>
    </div>

}

export default Register;
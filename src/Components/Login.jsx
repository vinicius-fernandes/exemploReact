import { useState } from 'react';
import {login} from '../API/auth'
import {setToken,getToken} from '../Services/auth'
function Login(){
    const [user, setUser] = useState({email:"",password:""});
    const[errorMsg,setErrorMsg] = useState("");
    function updateName(name){
        setUser(previousState =>{return {...previousState,email:name}});
    }
    function updatePassword(pass){
        setUser(previousState =>{return {...previousState,password:pass}});
    }
    const handleSubmit = async (event)=>{
        event.preventDefault()
        try{
            setErrorMsg("")
            const response = await login(user);
            setToken(response.data);
            console.log(getToken());
    
        }
        catch(e){
            setErrorMsg(e.response.data)
            console.log(e)
        }
    }
    return <>
         <form onSubmit= {handleSubmit}>
        <label>Insira seu login</label>
        <input type="text" onChange={(e)=>updateName(e.target.value)}></input>
        <label>Insira sua senha</label>
        <input type="Password" onChange={(e)=>updatePassword(e.target.value)}></input>
        <input type="submit"></input>
        {
            errorMsg !== "" && <p>{errorMsg}</p>
        }

    </form>

    </>
}
export default Login
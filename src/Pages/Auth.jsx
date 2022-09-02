import {useState} from 'react'
import Login from './../Components/Auth/Login'
function Auth(){
 const [showRegister,setShowRegister] = useState(false)
if(!showRegister){
return <><Login/> 
<button onClick={()=>setShowRegister(!showRegister)}>Cadastrar nova conta</button>
</>
}
else{
   return <>
   <h1>Registro</h1>
   <button onClick={()=>setShowRegister(!showRegister)}>Fazer login</button>

      </> 

}

}

export default Auth;
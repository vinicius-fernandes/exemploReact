import {useState} from 'react'
import Login from './../Components/Auth/Login'
import Register from './../Components/Auth/Register'
function Auth(){
 const [showRegister,setShowRegister] = useState(false)
 return <>
{!showRegister?
 <>
 <Login setShowRegister={setShowRegister} /> 
</>
:
    <>
   <Register setShowRegister={setShowRegister}/>

      </> 

}
</>
}



export default Auth;
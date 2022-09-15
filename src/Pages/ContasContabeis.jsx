import Create from './../Components/ContasContabeis/Create'
import {useState} from 'react';
function ContasContabeis(){
    const [componenteAtual,setComponentAtual] = useState('Index');
    return <>
    <Create setComponenteAtual= {setComponentAtual}/>
    
    </>


}

export default ContasContabeis;
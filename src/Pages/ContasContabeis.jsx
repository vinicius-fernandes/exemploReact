import Create from './../Components/ContasContabeis/Create'
import Index from './../Components/ContasContabeis/Index'
import { useState } from 'react';
function ContasContabeis() {
    const [componenteAtual, setComponentAtual] = useState('Index');
    switch (componenteAtual) {
        case 'Index':
            return <Index setComponenteAtual={setComponentAtual} />
        case 'Create':
            return <Create setComponenteAtual={setComponentAtual} />
    }


}

export default ContasContabeis;
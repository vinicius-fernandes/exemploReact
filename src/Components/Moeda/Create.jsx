import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { faPesetaSign } from '@fortawesome/free-solid-svg-icons';

function Create() {

   const [paises, setPaises] = useState(
        [
            { id: 1, nome: "Brasil" },
            { id: 2, nome: "Portugal" },
            { id: 3, nome: "Espanha" },
            { id: 4, nome: "França" },
        ])
    const [name,setName] = useState("");

    const [paisesSelecionados,setPaisesSelecionados] = useState([]);


    const UpdatePaisesSelecionados= (event,pais)=>{
       if(event.target.checked){
            setPaisesSelecionados(lastPaisesSelecionados=>[...lastPaisesSelecionados,pais])

       }
       else{
            const newPaises = paisesSelecionados.filter((e)=>e.id!=pais.id);
            setPaisesSelecionados(newPaises);
       }
    }

    return <div className="d-flex flex-column align-items-center">
        <h1>Cadastro de moeda</h1>
        <Form className="col-3 mt-5">
            <Form.Label>Nome moeda</Form.Label>
            <Form.Control type="text" name="name" onChange={((e)=>setName(e.target.value))}></Form.Control>
            <Form.Label>Países</Form.Label>
            {paises.map((pais) =>
                <Form.Check
                    onChange = {(event)=>UpdatePaisesSelecionados(event,pais)}
                    key={pais.id}
                    type='checkbox'
                    id={pais.id}
                    label={pais.nome}
                />
            )}
            <Button variant="success" type="submit">Enviar</Button>

        </Form>

    </div>

}

export default Create;
import { Form, Button } from "react-bootstrap";


function Create({setComponenteAtual}) {
    return <div className="d-flex flex-column align-items-center">
        <h1>Cadastro de conta contábil</h1>
        <Button variant="primary" onClick={() => setComponenteAtual("Index")}>Voltar</Button>
        <Form className="col-3 mt-5">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text"></Form.Control>
            <Form.Label>Numero de referência</Form.Label>
            <Form.Control type="text"></Form.Control>
            <Button className="mt-1" type="submit" variant="success">Enviar</Button>
        </Form>
    </div>
}
export default Create;
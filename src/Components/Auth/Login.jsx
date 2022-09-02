import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login(){


    return <>
    
    <Form>
        <Form.Label>Insira seu e-mail</Form.Label>
        <Form.Control type="text" ></Form.Control>
        <Form.Label>Insira sua senha</Form.Label>
        <Form.Control type="password" ></Form.Control>
        <Button variant="success" type="submit">Login</Button>
    </Form>
    
    </>
}

export default Login;
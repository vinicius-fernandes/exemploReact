import { Outlet,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout =()=>{
    return <>
    <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand >Meu APP</Navbar.Brand>
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/carros">Carros</Link></Nav.Link> 
            <Nav.Link ><Link to="/auth">Login</Link></Nav.Link>

        </Container>
    </Navbar>
    
        <Outlet/>
    
    </>
}

export default Layout;
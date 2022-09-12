import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Layout = () => {
    return <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand >Meu APP <FontAwesomeIcon icon={faUser} /></Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/carros">Carros</Link></Nav.Link>
                        <Nav.Link ><Link to="/auth">Login</Link></Nav.Link>
                        <Nav.Link ><Link to="/moeda">Moeda</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Outlet />

    </>
}
export default Layout;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function BSTNavBar() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/categoria/remera">Remeras</Nav.Link>
        <Nav.Link href="/categoria/taza">Tazas</Nav.Link>
        <Nav.Link href="/categoria/gorra">Gorras</Nav.Link>
        <Nav.Link href="/categoria/remera">Contacto</Nav.Link>
      </Nav>
      <CartWidget product={4}/>
    </Container>
  </Navbar>
  );
}


export default BSTNavBar;
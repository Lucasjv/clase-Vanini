import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function BSTNavBar() {
  return (
    <Navbar bg="white" variant="light" >
    <Container>
    
      <Link to  ="/">Home</Link> 
      <Nav  className="me-auto">
       
        <Link to  = "/categoria/remera" >Remeras</Link> 
     
        <Link to = "/categoria/taza" >Tazas</Link> 
     
        <Link to = "/categoria/gorra" >Gorras</Link> 
  
    
      </Nav>
     <Link to= "/cart"> <CartWidget product={4}/></Link>
    </Container>
  </Navbar>
  );
}


export default BSTNavBar;
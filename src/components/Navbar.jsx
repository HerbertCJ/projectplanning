import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo_transparent.png'

function NavbarBt() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>        
        <Navbar.Brand as={Link} to='/'>
          <img src={logo} alt="logo" />
        </Navbar.Brand>       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">            
            <Nav.Link as={Link} to='/' eventKey='1'>Home</Nav.Link> 
            <Nav.Link as={Link} to='/projects' eventKey='2'>Projects</Nav.Link>                   
          </Nav>         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBt;
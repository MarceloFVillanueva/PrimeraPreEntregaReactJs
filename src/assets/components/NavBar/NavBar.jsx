import { CartWidget } from "../CartWidget/CartWidget"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imagen from '../../../assets/react.svg'

import './NavBar.css'


function NavBar() {
  return (
    <>
      <Navbar expand="lg"  bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={imagen} / ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Hombres</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mujeres</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Nosotros</Nav.Link>
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBar
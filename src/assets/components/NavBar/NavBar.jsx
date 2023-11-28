import { CartWidget } from "../CartWidget/CartWidget"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getProducts } from "../../../asyncMock";
import imagen from '../../../assets/react.svg'
import { useState, useEffect } from "react";

import './NavBar.css'

function NavBar() {

  const [products, setProducts] = useState([])

  useEffect(()=> {
    getProducts()
    .then((res) => {
      setProducts(res)
    })
    .catch((err) =>{
      console.log(err)
    })
  }, [])

  return (
    <>
      <Navbar expand="lg"  bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img src={imagen} / ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                {
                  products.length > 0  &&
                  products.map((product)=>{
                    let hrefs = "#action/3."+product.id
                    return (
                      <NavDropdown.Item key={product.id} href={hrefs}>{product.category}</NavDropdown.Item>
                    )
                  })
                }
              </NavDropdown>
              <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBar
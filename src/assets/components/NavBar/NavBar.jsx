import { CartWidget } from "../CartWidget/CartWidget"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imagen from '../../../assets/react.svg'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './NavBar.css'
import { collection, getDocs, getFirestore } from "firebase/firestore";

function NavBar() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, 'peliculas');

    getDocs(queryCollection)
        .then(res => { setProducts( res.docs.map(pelicula => ({ id: pelicula.id , ...pelicula.data() }) ) )})
        .catch(err => console.log(err))
  }, []);

  const allCategories = products.reduce((categories, product) => {
    const productCategories = product.category;
    return categories.concat(productCategories);
  }, []);
  
  const uniqueCategories = [...new Set(allCategories)];

  return (
    <div>
      <Navbar expand="lg"  bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link className="link-nav" to="/"><img src={imagen} alt="img-reactJs" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="link-nav" to="/">Inicio</Link>
              </Nav.Link>
              <NavDropdown title="Categorias" className="link-nav">
                  {uniqueCategories.map((category, index) => {
                    const hrefs = `/categorias/${category}`;
                    return (
                      <NavDropdown.Item key={index}>
                        <Link to={hrefs}>{category}</Link>
                      </NavDropdown.Item>
                    );
                  })}
              </NavDropdown>
              <Nav.Link>
                <Link className="link-nav" to="/nosotros">Nosotros</Link>
              </Nav.Link>
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
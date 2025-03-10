import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as BNavbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { getTotal } = useContext(CartContext)
  const total = getTotal();
  const [token, setToken] = useState(true);

  return (
    <BNavbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <BNavbar.Brand href="#">Pizzeria Mamma Mia!</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="navbarScroll" />
        <BNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-link" >Home</Link>
            
            {token ? (
              <>
                <Link to="/profile" className="nav-link" >Profile</Link>
                <button onClick={() => setToken(false)} className="nav-link" >Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link" >Login</Link>
                <Link to="/register" className="nav-link" >Register</Link>
              </>
            )}
          </Nav>
          <div className="d-flex">
              <Link className="nav-link button-total" to='/cart'> Total: ${total.toLocaleString()}{" "} </Link>
          </div>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};

export default Navbar;

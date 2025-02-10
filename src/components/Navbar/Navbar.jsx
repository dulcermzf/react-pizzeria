import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as BNavbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  const total = 25000;
  const [token, setToken] = useState(false);

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
            <Nav.Link href="#action1">Home</Nav.Link>
            {token ? (
              <>
                <Nav.Link href="#action2">Profile</Nav.Link>
                <Nav.Link href="#action3">Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#action4">Login</Nav.Link>
                <Nav.Link href="#action5">Register</Nav.Link>
              </>
            )}
          </Nav>
          <div className="d-flex">
            <Button variant="outline-success">
              Total: ${total.toLocaleString()}{" "}
            </Button>
          </div>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};

export default Navbar;

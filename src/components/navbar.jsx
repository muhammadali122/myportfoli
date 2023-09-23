import React from "react";
import { Container, Navbar, Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Logo1.webp";

function Navigation() {
  return (
    <>
      <Container className="fixed-top shadow">
        <Navbar bg="dark" expand="md" className="my-0 py-0 navbar-dark ">
          <Container fluid className="py-2 w-100">
            <Navbar.Brand>
              <NavLink to="/home">
                <Image src={logo} width={200} height={50} alt="logo"/>
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbar-toggle"
              className="btn-light d-none"
            />
            <Navbar.Collapse>
              <Nav className="fw-600 ms-auto d-none">
                <NavLink
                  className="me-3 nav-link"
                  to={"/home" || "/"}
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-link d-none"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default Navigation;

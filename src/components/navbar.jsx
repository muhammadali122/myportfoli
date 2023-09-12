import React from "react";
import { Container, Navbar, Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Logo1.png";

function Navigation() {
  return (
    <>
      <Container>
        <Navbar bg="dark" expand="md" className="my-0 py-0 navbar-dark">
          <Container fluid className="py-2 w-100">
            <Navbar.Brand>
              <NavLink to="/">
                <Image src={logo} width={200} />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbar-toggle"
              className="text-light"
            />
            <Navbar.Collapse>
              <Nav className="fw-600 ms-auto">
                <NavLink
                  className="me-3 nav-link"
                  to="/home"
                  activeClassName="activeLink"
                >
                  Home
                </NavLink>
                <NavLink
                  className="me-3 nav-link"
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className="me-3 nav-link"
                  to="/resume"
                >
                  Resume
                </NavLink>
                <NavLink
                  className="me-3 nav-link"
                  to="/skills"
                >
                  Skills
                </NavLink>
                <NavLink
                  className="nav-link me-3"
                  to="/projects"
                >
                  Projects
                </NavLink>
                <NavLink
                  className="nav-link"
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

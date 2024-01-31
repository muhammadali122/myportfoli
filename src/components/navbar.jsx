import React from "react";
import { Container, Navbar, Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Logo1.webp";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

function Navigation() {
  return (
    <>
      <Container className="fixed-top shadow-bottom">
        <Navbar bg="dark" expand="md" className="my-0 py-0 navbar-dark ">
          <Container fluid className="py-2 w-100">
            <Navbar.Brand>
              <NavLink to="/home">
                <Image src={logo} width={200} height={50} alt="logo" />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbar-toggle"
              className="btn-light"
            />
            <Navbar.Collapse>
              <Nav className="fw-600 ms-auto">
                <NavLink className="me-3 nav-link d-none" to={"/home" || "/"}>
                  Home
                </NavLink>
                <NavLink className="nav-link d-none" to="/contact">
                  Contact
                </NavLink>
                <NavLink
                  className="nav-link text-light"
                  to="https://www.facebook.com/profile.php?id=100010005828606"
                  target="_blank"
                >
                  <FaFacebook size="35" />
                </NavLink>
                <NavLink
                  className="nav-link text-light"
                  to="https://www.linkedin.com/in/muhammad-ali-5b5339172/"
                  target="_blank"
                >
                  <FaLinkedin size="35" />
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

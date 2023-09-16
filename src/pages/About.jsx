import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import profilePic from "../assets/images/profile-pic.webp";
import { Link } from "react-router-dom";
import myCv from "../assets/files/Muhammad Ali React Js.pdf"

function About() {
  return (
    <Container>
      <Container className="d-flex flex-md-row flex-column align-items-center">
        <Container className="text-center mb-md-none mb-3">
          <Image src={profilePic} className="img-responsive" fluid rounded />
        </Container>
        <Container className="text-light mx-auto mx-3">
          <h1 className="fw-bolder text-md-start text-center fw-100 text-warning">
            About Me
          </h1>
          <div>
            <Row className="pt-4">
              <Col sm={3} className="fw-bold">
                Name
              </Col>
              <Col sm={9} className="text-secondary opacity-100">
                Muhammad Ali
              </Col>
            </Row>
            <Row className="pt-2">
              <Col sm={3} className="fw-bold">
                Date Of Birth
              </Col>
              <Col sm={9} className="text-secondary opacity-100">
                March 20, 2001
              </Col>
            </Row>
            <Row className="pt-2">
              <Col sm={3} className="fw-bold">
                Address
              </Col>
              <Col sm={9} className="text-secondary opacity-100">
                Punjab Lahore
              </Col>
            </Row>
            <Row className="pt-2">
              <Col sm={3} className="fw-bold">
                Email
              </Col>
              <Col sm={9} className="text-secondary opacity-100">
                muhammadali0030@yahoo.com
              </Col>
            </Row>
            <Row className="pt-2">
              <Col sm={3} className="fw-bold">
                Phone
              </Col>
              <Col sm={9} className="text-secondary opacity-100">
                +923489310772
              </Col>
            </Row>
            <div className="mt-4">
              <Button variant="warning fw-500 rounded-pill">
                <Link
                  className="text-decoration-none text-dark bg-transparent hire-me-link"
                  to={myCv}
                  download="Muhammad Ali Front-End Develper.pdf"
                  target="_blank"
                >
                  DOWNLOAD CV
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Container>
    </Container>
  );
}

export default About;

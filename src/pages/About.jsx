import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import myCv from "../assets/files/Muhammad Ali React Js.pdf";

function About() {
  return (
    <Container className="mt-5 shadow rounded py-5">
      <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
        <Container className="mb-md-none mb-3 me-auto">
          <Image
            src="https://img.icons8.com/wired/1064/FAB005/about-us-male.png"
            rounded
            width={300}
            alt="profile pic"
          />
        </Container>
        <Container className="text-light">
          <h1 className="fw-bolder text-md-start text-center fw-100">
            About Me
          </h1>
          <div>
            <Row className="pt-4">
              <Col xs={6} md={5} lg={4} className="fw-bold">
                Name
              </Col>
              <Col xs={6} md={7} lg={8} className="text-secondary opacity-100">
                Muhammad Ali
              </Col>
            </Row>
            <Row className="pt-2">
              <Col xs={6} md={5} lg={4} className="fw-bold">
                Date Of Birth
              </Col>
              <Col xs={6} md={7} lg={8} className="text-secondary opacity-100">
                March 20, 2001
              </Col>
            </Row>
            <Row className="pt-2">
              <Col xs={6} md={5} lg={4} className="fw-bold">
                Address
              </Col>
              <Col xs={6} md={7} lg={8} className="text-secondary opacity-100">
                Punjab Lahore
              </Col>
            </Row>
            <Row className="pt-2">
              <Col xs={6} md={5} lg={4} className="fw-bold">
                Email
              </Col>
              <Col
                xs={6}
                md={7}
                lg={8}
                className="text-secondary opacity-100 text-break"
              >
                muhammadali0030@yahoo.com
              </Col>
            </Row>
            <Row className="pt-2">
              <Col xs={6} md={5} lg={4} className="fw-bold">
                Phone
              </Col>
              <Col xs={6} md={7} lg={8} className="text-secondary opacity-100">
                +923489310772
              </Col>
            </Row>
            <div className="mt-4 text-md-start text-center">
              <Button variant="warning fw-500 rounded-pill px-3 py-2">
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
      </div>
    </Container>
  );
}

export default About;

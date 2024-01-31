import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm.jsx";

const Contact = () => {
  return (
    <>
      <Container className="py-md-5 py-3">
        <h1 className="fw-bolder text-light fw-100 text-center py-md-4 py-3 bg-secondary bg-opacity-25 rounded">
          Contact Me
        </h1>
        <div className="pt-md-5 pt-3">
          <Row className="g-md-3 g-5 mt-3 mb-5">
            <Col sm={6} md={3}>
              <div className="text-center">
                <span className="bg-secondary bg-opacity-50 rounded-circle p-5">
                  <FaLocationDot
                    size={35}
                    className="bg-transparent text-warning"
                  />
                </span>
                <div className="mt-5">
                  <h6 className="bg-transparent text-light py-3">
                    Lahore Punjab
                  </h6>
                </div>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className="text-center">
                <span className="bg-secondary bg-opacity-50 rounded-circle p-5">
                  <FaPhone size={35} className="bg-transparent text-warning" />
                </span>
                <div className="mt-5">
                  <h6 className="bg-transparent text-light py-3">
                    +92 348 9310772
                  </h6>
                </div>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className="text-center">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:muhammadali0030@yahoo.com";
                    e.preventDefault();
                  }}
                  className="text-decoration-none text-light"
                >
                  <span className="bg-secondary bg-opacity-50 rounded-circle p-5">
                    <FaEnvelope
                      size={35}
                      className="bg-transparent text-warning"
                    />
                  </span>
                </Link>
                <div className="mt-5">
                  <h6 className="bg-transparent text-light py-3">
                    <Link
                      to="#"
                      onClick={(e) => {
                        window.location.href =
                          "mailto:muhammadali0030@yahoo.com";
                        e.preventDefault();
                      }}
                      className="text-decoration-none text-light"
                    >
                      muhammadali0030@yahoo.com
                    </Link>
                  </h6>
                </div>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className="text-center">
                <Link
                  to="https://www.linkedin.com/in/muhammad-ali-5b5339172/"
                  className="text-decoration-none text-light"
                >
                  <span className="bg-secondary bg-opacity-50 rounded-circle p-5">
                    <FaLinkedin
                      size={35}
                      className="bg-transparent text-warning"
                    />
                  </span>
                </Link>
                <div className="mt-5">
                  <h6 className="bg-transparent text-light py-3">
                    <Link
                      to="https://www.linkedin.com/in/muhammad-ali-5b5339172/"
                      className="text-decoration-none text-light"
                    >
                      Linkedin
                    </Link>
                  </h6>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="pb-md-5 pb-3">
          <Row className="g-0">
            <Col
              md={6}
              className="bg-secondary bg-opacity-50 rounded-md-start rounded-top d-flex align-item-center justify-content-center"
            >
              <Image
                src={require("../assets/images/profile-pic.webp")}
                fluid
                rounded
                width={500}
                height={500}
                alt="profile image"
                className="bg-transparent"
              />
            </Col>
            <Col md={6} className="bg-white rounded-md-end rounded-bottom">
              <ContactForm />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Contact;

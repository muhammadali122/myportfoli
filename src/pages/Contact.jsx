import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

import ContactForm from "../components/ContactForm.jsx";
import AreaHeading from "../layout/areaHeading.jsx";

const Contact = () => {
  return (
    <>
      <Container className="py-md-5 py-3">
        <AreaHeading word1="GET IN" word2="TOUCH" />

        <div className="pt-md-5 pt-3">
          <Row className="g-md-3 g-5 mt-3 mb-5 d-none">
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
        <div></div>
        <div className="pb-md-5 pb-3">
          <Row className="g-0">
            <Col md={4}>
              <h3 className="text-white fw-bold">DON'T BE SHY!</h3>
              <h6 className="text-white mb-0 py-3">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </h6>

              <div className="d-flex gap-3 pb-3">
                <div>
                  <IoMdMail size={43} color="#ffc107" />
                </div>
                <div>
                  <h6 className="mb-0 text-white opacity-75 fw-medium">
                    MAIL ME
                  </h6>
                  <a
                    href="mailto:muhammadali0030@yahoo.com"
                    className="text-decoration-none"
                  >
                    <h6 className="mb-0 text-white">
                      muhammadali0030@yahoo.com
                    </h6>
                  </a>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="bg-warning rounded">
                  <IoMdCall
                    size={40}
                    color="black"
                    className="bg-transparent"
                  />
                </div>
                <div>
                  <h6 className="mb-0 text-white opacity-75 fw-medium">
                    CALL ME
                  </h6>
                  <a
                    href="tel:0092-348-9310772"
                    className="text-decoration-none"
                  >
                    <h6 className="mb-0 text-white">+92 348 9310772</h6>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <ContactForm />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Contact;

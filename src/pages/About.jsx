import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AreaHeading from "../layout/areaHeading";

const calculateAge = (birthYear, birthMonth) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // getMonth() is zero-based
  let age = currentYear - birthYear;

  // Adjust age if the current month is before the birth month
  if (currentMonth < birthMonth) {
    age--;
  }

  return age;
};

const personalInfo = [
  {
    label: "Name",
    value: "Muhammad Ali",
  },
  {
    label: "Age",
    value: `${calculateAge(2001, 3)} Year's`,
  },
  {
    label: "Languages",
    value: "Pashto, Urdu & English",
  },
  {
    label: "Phone",
    value: "+92 348 9310772",
    isLink: true,
  },
  {
    label: "Email",
    value: "muhammadali0030@yahoo.com",
    isLink: true,
  },
  {
    label: "Freelance",
    value: "Available",
  },
];

function About() {
  return (
    <Container className="py-md-5 py-3">
      <AreaHeading word1="ABOUT" word2="ME" />
      <div className="d-flex flex-md-row flex-column py-md-5 py-3 gap-3 w-100">
        <div className="text-light w-100">
          {personalInfo.map((info) => (
            <Row className="pb-md-4 pb-2 w-100">
              <Col xs={6} md={5} lg={4} className="text-start">
                <h6 className="fw-bold opacity-50">{info.label}</h6>
              </Col>
              <Col xs={6} md={7} lg={8} className="text-md-end">
                {info.isEmail}
                <h6 className="fw-bold text-break">{info.value}</h6>
              </Col>
            </Row>
          ))}
        </div>
        <div className="w-100">
          <Row className="g-4">
            <Col xs={6}>
              <div className="border rounded border-secondary px-2">
                <h1 className="text-warning display-4 fw-bold">6+</h1>
                <div className="d-flex gap-1">
                  <div className="border border-secondary w-25 align-self-start"></div>
                  <h5 className="text-white">
                    PROJECTS <br />
                    COMPLETED
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="border rounded border-secondary px-2">
                <h1 className="text-warning display-4 fw-bold">2+</h1>
                <div className="d-flex gap-1">
                  <div className="border border-secondary w-25 align-self-start"></div>
                  <h5 className="text-white">
                    YEARS OF <br /> EXPERINCE
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="border rounded border-secondary px-2">
                <h1 className="text-warning display-4 fw-bold">4+</h1>
                <div className="d-flex gap-1">
                  <div className="border border-secondary w-25 align-self-start"></div>
                  <h5 className="text-white">
                    HAPPY
                    <br /> CUSTOMERS
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="border rounded border-secondary px-2">
                <h1 className="text-warning display-4 fw-bold">1+</h1>
                <div className="d-flex gap-1">
                  <div className="border border-secondary w-25 align-self-start"></div>
                  <h5 className="text-white">
                    AWARDS <br /> WON
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default About;

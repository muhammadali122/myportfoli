import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import { FaDesktop } from "react-icons/fa";

function Services() {
  const [webstyle, setWebStyle] = useState({
    color: "#ffc107",
    bgColor: "bg-dark",
    border: "border-bottom border-light",
    textColor: "text-light",
  });
  const [devStyle, setDevStyle] = useState({
    color: "#ffc107",
    bgColor: "bg-dark",
    border: "border-bottom border-light",
    textColor: "text-light",
  });
  const [unitStyle, setUnitStyle] = useState({
    color: "#ffc107",
    bgColor: "bg-dark",
    border: "border-bottom border-light",
    textColor: "text-light",
  });
  return (
    <Container className="mt-5 shadow rounded py-5">
      <h1 className="fw-bolder text-light fw-100 text-center">Services</h1>
      <Row>
        <Col md={6} lg={4}>
          <Card
            className="text-center"
            onMouseEnter={() =>
              setWebStyle({
                color: "white",
                bgColor: "bg-warning",
                border: "border-bottom border-dark",
                textColor: "text-dark",
              })
            }
            onMouseLeave={() =>
              setWebStyle({
                color: "#ffc107",
                bgColor: "bg-dark",
                border: "border-bottom border-light",
                textColor: "text-light",
              })
            }
          >
            <Card.Body className={`${webstyle.bgColor} p-5`}>
              <FaDesktop
                color={webstyle?.color}
                size={100}
                className="bg-transparent"
              />
              <h5 className={`${webstyle.textColor} pb-2 pt-3 bg-transparent `}>
                Web Design
              </h5>
              <div className={`${webstyle.border} w-25 mx-auto`} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mt-md-auto my-3">
          <Card
            className="text-center"
            onMouseEnter={() =>
              setDevStyle({
                color: "white",
                bgColor: "bg-warning",
                border: "border-bottom border-dark",
                textColor: "text-dark",
              })
            }
            onMouseLeave={() =>
              setDevStyle({
                color: "#ffc107",
                bgColor: "bg-dark",
                border: "border-bottom border-light",
                textColor: "text-light",
              })
            }
          >
            <Card.Body className={`${devStyle.bgColor} p-5`}>
              <FaDesktop
                color={devStyle?.color}
                size={100}
                className="bg-transparent"
              />
              <h5 className={`${devStyle.textColor} pb-2 pt-3 bg-transparent `}>
                Web Development
              </h5>
              <div className={`${devStyle.border} w-25 mx-auto`} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mt-lg-auto my-md-3 my-auto">
          <Card
            className="text-center"
            onMouseEnter={() =>
              setUnitStyle({
                color: "white",
                bgColor: "bg-warning",
                border: "border-bottom border-dark",
                textColor: "text-dark",
              })
            }
            onMouseLeave={() =>
              setUnitStyle({
                color: "#ffc107",
                bgColor: "bg-dark",
                border: "border-bottom border-light",
                textColor: "text-light",
              })
            }
          >
            <Card.Body className={`${unitStyle.bgColor} p-5`}>
              <FaDesktop
                color={unitStyle?.color}
                size={100}
                className="bg-transparent"
              />
              <h5
                className={`${unitStyle.textColor} pb-2 pt-3 bg-transparent `}
              >
                React JS Unit Tests
              </h5>
              <div className={`${unitStyle.border} w-25 mx-auto`} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;

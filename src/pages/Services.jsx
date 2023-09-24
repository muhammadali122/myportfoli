import React, { useState } from "react";
import { CgIfDesign } from "react-icons/cg";
import { SiTestinglibrary } from "react-icons/si";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { Card, Col, Container, Row } from "react-bootstrap";
import { styleConstant, onHoverStyleConstant } from "../constants";

function Services() {
  const [webstyle, setWebStyle] = useState(styleConstant);
  const [devStyle, setDevStyle] = useState(styleConstant);
  const [unitStyle, setUnitStyle] = useState(styleConstant);

  return (
    <Container className="py-md-5 py-3">
      <h1 className="fw-bolder text-light fw-100 text-center py-md-4 py-3 bg-secondary bg-opacity-25 rounded">Services</h1>
      <Row className="py-md-5 py-3">
        <Col md={6} lg={4}>
          <Card
            className="text-center "
            onMouseEnter={() => setWebStyle(onHoverStyleConstant)}
            onMouseLeave={() => setWebStyle(styleConstant)}
          >
            <Card.Body className={`${webstyle.bgColor} p-5 rounded`}>
              <CgIfDesign
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
            className="text-center "
            onMouseEnter={() => setDevStyle(onHoverStyleConstant)}
            onMouseLeave={() => setDevStyle(styleConstant)}
          >
            <Card.Body className={`${devStyle.bgColor} p-5 rounded`}>
              <TbDeviceDesktopCode
                color={devStyle?.color}
                size={100}
                className="bg-transparent "
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
            className="text-center "
            onMouseEnter={() => setUnitStyle(onHoverStyleConstant)}
            onMouseLeave={() => setUnitStyle(styleConstant)}
          >
            <Card.Body className={`${unitStyle.bgColor} p-5 rounded`}>
              <SiTestinglibrary
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

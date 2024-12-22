import React, { useState } from "react";
import { RiSendToBack } from "react-icons/ri";
import { SiTestinglibrary } from "react-icons/si";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { Card, Col, Container, Row } from "react-bootstrap";
import { MdOutlineIntegrationInstructions } from "react-icons/md";

import AreaHeading from "../layout/areaHeading";
import { styleConstant, onHoverStyleConstant } from "../constants";

function Services() {
  const [webDev, setWebDevStyle] = useState(styleConstant);
  const [unitStyle, setUnitStyle] = useState(styleConstant);
  const [integrationStyle, setIntegrationStyle] = useState(styleConstant);
  const [endToEndStyle, setEndToEndStyle] = useState(styleConstant);

  return (
    <Container className="py-md-5 py-3">
      <AreaHeading word1="SERVICES" />

      <Row className="py-md-5 py-3">
        <Col md={6} lg={4} className="mt-md-auto my-3">
          <Card
            className="text-center "
            onMouseEnter={() => setWebDevStyle(onHoverStyleConstant)}
            onMouseLeave={() => setWebDevStyle(styleConstant)}
          >
            <Card.Body className={`${webDev.bgColor} p-5 rounded`}>
              <TbDeviceDesktopCode
                color={webDev?.color}
                size={100}
                className="bg-transparent "
              />
              <h5 className={`${webDev.textColor} pb-2 pt-3 bg-transparent `}>
                Web Development
              </h5>
              <div className={`${webDev.border} w-25 mx-auto`} />
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
                Unit Tests
              </h5>
              <div className={`${unitStyle.border} w-25 mx-auto`} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mt-md-auto my-3">
          <Card
            className="text-center"
            onMouseEnter={() => setIntegrationStyle(onHoverStyleConstant)}
            onMouseLeave={() => setIntegrationStyle(styleConstant)}
          >
            <Card.Body className={`${integrationStyle.bgColor} p-5 rounded`}>
              <MdOutlineIntegrationInstructions
                color={integrationStyle?.color}
                size={100}
                className="bg-transparent "
              />
              <h5
                className={`${integrationStyle.textColor} pb-2 pt-3 bg-transparent `}
              >
                Integration Tests
              </h5>
              <div className={`${integrationStyle.border} w-25 mx-auto`} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mt-md-auto my-3">
          <Card
            className="text-center"
            onMouseEnter={() => setEndToEndStyle(onHoverStyleConstant)}
            onMouseLeave={() => setEndToEndStyle(styleConstant)}
          >
            <Card.Body className={`${endToEndStyle.bgColor} p-5 rounded`}>
              <RiSendToBack
                color={endToEndStyle?.color}
                size={100}
                className="bg-transparent "
              />
              <h5
                className={`${endToEndStyle.textColor} pb-2 pt-3 bg-transparent `}
              >
                End-to-End Testing
              </h5>
              <div className={`${endToEndStyle.border} w-25 mx-auto`} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;

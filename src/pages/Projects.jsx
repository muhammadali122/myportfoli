import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ciwuw,
  fulrailConstants,
  surveyConstants,
  zentifySystems,
} from "../constants";
import ProjectContainer from "../layout/ProjectContainer";
import AreaHeading from "../layout/areaHeading";

const Projects = () => {
  return (
    <>
      <Container className="py-md-5 py-3">
        <AreaHeading word1="PROJECTS" />
        <div className="py-md-5 py-3">
          <Row className="g-3">
            <Col md={6} lg={4}>
              <ProjectContainer
                mainClass="fullRail"
                title={fulrailConstants.title}
                description={fulrailConstants.description}
              />
            </Col>
            <Col md={6} lg={4}>
              <ProjectContainer
                mainClass="survey"
                title={surveyConstants.title}
                description={surveyConstants.description}
              />
            </Col>
            <Col md={6} lg={4}>
              <ProjectContainer
                mainClass="zentify"
                title={zentifySystems.title}
                description={zentifySystems.description}
              />
            </Col>
            <Col md={6} lg={4}>
              <ProjectContainer
                mainClass="ciwuw"
                title={ciwuw.title}
                description={ciwuw.description}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Projects;

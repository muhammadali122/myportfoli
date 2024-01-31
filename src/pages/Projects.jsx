import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fulrailConstants, surveyConstants, zentifySystems } from "../constants";
import ProjectContainer from "../layout/ProjectContainer";

const Projects = () => {
  return (
    <>
      <Container className="py-md-5 py-3">
        <h1 className="fw-bolder text-light fw-100 text-center py-md-4 py-3 bg-secondary bg-opacity-25 rounded">
          Projects
        </h1>
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
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Projects;

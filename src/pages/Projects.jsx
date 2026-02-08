import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  salarStarConstants,
  goldenJasmineConstants,
  bodyMapConstants,
  ciwuw,
  fulrailConstants,
  surveyConstants,
  jarvisConstants,
} from "../constants";
import ProjectContainer from "../layout/ProjectContainer";
import AreaHeading from "../layout/areaHeading";

const projects = [
  { mainClass: "salarStar", ...salarStarConstants },
  { mainClass: "goldenJasmine", ...goldenJasmineConstants },
  { mainClass: "bodyMap", ...bodyMapConstants },
  { mainClass: "ciwuw", ...ciwuw },
  { mainClass: "fullRail", ...fulrailConstants },
  { mainClass: "survey", ...surveyConstants },
  { mainClass: "jarvis", ...jarvisConstants },
];

const Projects = () => {
  return (
    <>
      <Container className="py-md-5 py-3">
        <AreaHeading word1="PROJECTS" />
        <div className="py-md-5 py-3">
          <Row className="g-3">
            {projects.map((project, index) => (
              <Col
                key={project.mainClass}
                md={6}
                lg={4}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <ProjectContainer
                  mainClass={project.mainClass}
                  title={project.title}
                  description={project.description}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Projects;

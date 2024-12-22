import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

import { skillsConstants } from "../constants";
import AreaHeading from "../layout/areaHeading";

const Skills = () => {
  return (
    <Container className="py-md-5 py-3">
      <AreaHeading word1="MY" word2="SKILLS" />

      <div className="py-md-5 py-3">
        <Row className="g-4">
          {skillsConstants.map((skill) => (
            <Col md={6} key={skill.label}>
              <h5 className="text-light">{skill.label}</h5>
              <ProgressBar
                now={skill.percentage}
                variant="warning"
                className="bg-secondary"
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Skills;

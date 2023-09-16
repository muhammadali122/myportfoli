import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Resume() {
  return (
    <Container>
      <h1 className="fw-bolder text-center fw-100 text-warning mb-4">Resume</h1>
      <Row>
        <Col md={6} className="mb-md-auto mb-4">
          <Card className="bg-secondary bg-opacity-50 rounded">
            <Card.Header className="bg-secondary bg-opacity-50 py-2">
              <h2 className="fw-700 bg-transparent text-warning">2018-2022</h2>
              <h4 className="bg-transparent text-light fw-normal">
                Bachelor In Software Engineering
              </h4>
            </Card.Header>
            <Card.Body className="bg-secondary bg-opacity-50">
              <h5 className="text-light bg-transparent fw-normal">
                University Of Malakand
              </h5>
              <p></p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-secondary bg-opacity-50 rounded">
            <Card.Header className="bg-secondary bg-opacity-50 py-2">
              <h2 className="fw-700 bg-transparent text-warning">2016-2020</h2>
              <h4 className="bg-transparent text-light fw-normal">
                FS'c (Pre-Engineering)
              </h4>
            </Card.Header>
            <Card.Body className="bg-secondary bg-opacity-50">
              <h5 className="text-light bg-transparent fw-normal">
                DCST Dir Lower
              </h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mt-4">
          <Card className="bg-secondary bg-opacity-50 rounded">
            <Card.Header className="bg-secondary bg-opacity-50 py-2">
              <h2 className="fw-700 bg-transparent text-warning">2014-2016</h2>
              <h4 className="bg-transparent text-light fw-normal">
                Intermadiate
              </h4>
            </Card.Header>
            <Card.Body className="bg-secondary bg-opacity-50">
              <h5 className="text-light bg-transparent fw-normal">
                GCMHS Dir Lower KPK
              </h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;

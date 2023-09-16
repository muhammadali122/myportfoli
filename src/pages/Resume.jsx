import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Resume() {
  return (
    <Container className="shadow">
      <h1 className="fw-bolder text-center fw-100 text-light mb-4">Resume</h1>
      <Row>
        <Col md={6} className="mb-md-auto mb-4">
          <Card className="bg-secondary bg-opacity-50 rounded shadow">
            <Card.Header className="bg-secondary bg-opacity-50 py-2">
              <h2 className="fw-700 bg-transparent text-warning">2018-2022</h2>
              <h4 className="bg-transparent text-light fw-normal">
                Bachelor In Software Engineering
              </h4>
              <h5 className="card-text bg-transparent mt-3">
                University Of Malakand
              </h5>
            </Card.Header>
            <Card.Body className="bg-secondary bg-opacity-50">
              <Card.Text className="bg-transparent card-text">
                "I hold a Bachelor's degree in Software Engineering from the
                University of Malakand, where I acquired extensive knowledge in
                software development, coding, and problem-solving. My coursework
                encompassed programming languages, algorithms, and software
                design, providing a strong foundation for a successful career in
                software development."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-secondary bg-opacity-50 rounded shadow">
            <Card.Header className="bg-secondary bg-opacity-50 py-2">
              <h2 className="fw-700 bg-transparent text-warning">2016-2018</h2>
              <h4 className="bg-transparent text-light fw-normal">
                FS'c (Pre-Engineering)
              </h4>
              <h5 className="card-text bg-transparent mt-3">DCST Dir Lower</h5>
            </Card.Header>
            <Card.Body className="bg-secondary bg-opacity-50">
              <Card.Text className="bg-transparent card-text">
                "I completed my pre-engineering education at Dir College of
                Science and Technology, where I developed a strong academic
                foundation in mathematics, physics, and other key subjects. This
                program equipped me with the necessary skills and knowledge to
                pursue a degree in software engineering and excel in technical
                fields."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mt-4">
          <Card className="bg-secondary bg-opacity-50 rounded shadow">
            <Card.Header className="bg-secondary bg-opacity-50 py-2">
              <h2 className="fw-700 bg-transparent text-warning">2014-2016</h2>
              <h4 className="bg-transparent text-light">Intermadiate</h4>
              <h5 className="card-text bg-transparent mt-3">
                GCMHS Dir Lower KPK
              </h5>
            </Card.Header>
            <Card.Body className="bg-secondary bg-opacity-50">
              <Card.Text className="bg-transparent card-text">
                " I completed my school education at GCMH School, where I
                pursued a curriculum in general science. This institution
                provided me with a well-rounded education, fostering my
                curiosity and passion for science and its applications. It laid
                the foundation for my academic journey and instilled a love for
                learning."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;

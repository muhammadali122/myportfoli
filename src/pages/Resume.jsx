import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";

import AreaHeading from "../layout/areaHeading";

function Resume() {
  return (
    <Container className="py-md-5 py-3">
      <AreaHeading word1="EDUCATION &" word2="EXPERIENCE" />

      <Row className="pt-md-5 pt-3">
        <Col md={6} className="mb-md-auto mb-4">
          <div className="d-flex gap-2 p-3">
            <div className="d-flex flex-column align-items-center gap-1">
              <div className="bg-warning rounded-pill p-2 shadow">
                <MdOutlineWork
                  size={35}
                  color="white"
                  className="bg-transparent"
                />
              </div>
              <div className="h-100 border border-start border-0 border-secondary"></div>
            </div>
            <div className="d-flex flex-column align-items-start">
              <div className="bg-secondary bg-opacity-50 rounded-pill p-1 px-2 text-white mb-2">
                <p className="mb-0 bg-transparent small fw-bold opacity-75">
                  NOV 2024 - PRESENT
                </p>
              </div>
              <h5 className="fw-bold text-white">
                Software Engineer -{" "}
                <span className="opacity-75">HazelSoft</span>
              </h5>
              <p className="text-light">
                As a Software Engineer, I build responsive React.js
                applications, design interactive UIs, ensure code quality with
                Unit, Integration, and E2E tests, collaborate on UI/UX
                alignment, and optimize performance, bridging design and
                functionality to deliver high-quality, scalable front-end
                solutions.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <h6 className="fw-bold text-light opacity-75 mb-0 pt-1">
                  Tool's Used:
                </h6>
                {[
                  "Javascript",
                  "Typescript",
                  "React Js",
                  "React Testing Library",
                  "Playwright",
                  "Github",
                  "Jira",
                  "Teamcity",
                ].map((skill) => (
                  <div
                    className="p-1 px-2 rounded-pill bg-secondary bg-opacity-50 text-white warning-hover"
                    role="button"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-md-auto mb-4">
          <div className="d-flex gap-2 p-3">
            <div className="d-flex flex-column align-items-center gap-1">
              <div className="bg-warning rounded-pill p-2 shadow">
                <MdOutlineWork
                  size={35}
                  color="white"
                  className="bg-transparent"
                />
              </div>
              <div className="h-100 border border-start border-0 border-secondary"></div>
            </div>
            <div className="d-flex flex-column align-items-start">
              <div className="bg-secondary bg-opacity-50 rounded-pill p-1 px-2 text-white mb-2">
                <p className="mb-0 bg-transparent small fw-bold opacity-75">
                  FEB 2023 - NOV 2024
                </p>
              </div>
              <h5 className="fw-bold text-white">
                Associate Software Engineer -{" "}
                <span className="opacity-75">HazelSoft</span>
              </h5>
              <p className="text-light">
                As an Associate Software Engineer, I contributed to developing
                and maintaining responsive web applications, assisted in
                designing interactive UIs, performed Unit and Integration tests
                to ensure code quality, collaborated with teams to meet project
                goals, and supported the delivery of efficient, user-friendly
                solutions.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <h6 className="fw-bold text-light opacity-75 mb-0 pt-1">
                  Tool's Used:
                </h6>
                {[
                  "Javascript",
                  "React Js",
                  "React Testing Library",
                  "Github",
                  "Jira",
                ].map((skill) => (
                  <div
                    className="p-1 px-2 rounded-pill bg-secondary bg-opacity-50 text-white warning-hover"
                    role="button"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-md-auto mb-4">
          <div className="d-flex gap-2 p-3">
            <div className="d-flex flex-column align-items-center gap-1">
              <div className="bg-warning rounded-pill p-2 shadow">
                <MdOutlineWork
                  size={35}
                  color="white"
                  className="bg-transparent"
                />
              </div>
              <div className="h-100 border border-start border-0 border-secondary"></div>
            </div>
            <div className="d-flex flex-column align-items-start">
              <div className="bg-secondary bg-opacity-50 rounded-pill p-1 px-2 text-white mb-2">
                <p className="mb-0 bg-transparent small fw-bold opacity-75">
                  NOV 2022 - FEB 2023
                </p>
              </div>
              <h5 className="fw-bold text-white">
                Software Engineer Intern -{" "}
                <span className="opacity-75">HazelSoft</span>
              </h5>
              <p className="text-light">
                During my internship, I focused on learning and applying HTML,
                CSS, JavaScript, Bootstrap, and the basics of React.js, building
                a strong foundation in front-end development and enhancing my
                skills in creating responsive and user-friendly web interfaces.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <h6 className="fw-bold text-light opacity-75 mb-0 pt-1">
                  Tool's Used:
                </h6>
                {["HTML", "CSS", "Javascript", "React Js Basic"].map(
                  (skill) => (
                    <div
                      className="p-1 px-2 rounded-pill bg-secondary bg-opacity-50 text-white warning-hover"
                      role="button"
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-md-auto mb-4">
          <div className="d-flex gap-2 p-3">
            <div className="d-flex flex-column align-items-center gap-1">
              <div className="bg-warning rounded-pill p-2 shadow">
                <FaGraduationCap
                  size={35}
                  color="white"
                  className="bg-transparent"
                />
              </div>
              <div className="h-100 border border-start border-0 border-secondary" />
            </div>
            <div className="d-flex flex-column align-items-start">
              <div className="bg-secondary bg-opacity-50 rounded-pill p-1 px-2 text-white mb-2">
                <p className="mb-0 bg-transparent small fw-bold opacity-75">
                  2018 - 2022
                </p>
              </div>
              <h5 className="fw-bold text-white">
                BS Software Engineering -{" "}
                <span className="opacity-75">University Of Malakand</span>
              </h5>
              <p className="text-light mb-0">
                I hold a Bachelor's degree in Software Engineering from the
                University of Malakand, where I acquired extensive knowledge in
                software development, coding, and problem-solving. My coursework
                encompassed programming languages, algorithms, and software
                design, providing a strong foundation for a successful career in
                software development.
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-md-auto mb-4">
          <div className="d-flex gap-2 p-3">
            <div className="d-flex flex-column align-items-center gap-1">
              <div className="bg-warning rounded-pill p-2 shadow">
                <FaGraduationCap
                  size={35}
                  color="white"
                  className="bg-transparent"
                />
              </div>
              <div className="h-100 border border-start border-0 border-secondary" />
            </div>
            <div className="d-flex flex-column align-items-start">
              <div className="bg-secondary bg-opacity-50 rounded-pill p-1 px-2 text-white mb-2">
                <p className="mb-0 bg-transparent small fw-bold opacity-75">
                  2016 - 2018
                </p>
              </div>
              <h5 className="fw-bold text-white">
                FS'c (Pre-Engineering) -{" "}
                <span className="opacity-75">DCST Dir Lower</span>
              </h5>
              <p className="text-light mb-0">
                I completed my pre-engineering education at Dir College of
                Science and Technology, where I developed a strong academic
                foundation in mathematics, physics, and other key subjects. This
                program equipped me with the necessary skills and knowledge to
                pursue a degree in software engineering and excel in technical
                fields.
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-md-auto mb-4">
          <div className="d-flex gap-2 p-3">
            <div className="d-flex flex-column align-items-center gap-1">
              <div className="bg-warning rounded-pill p-2 shadow">
                <FaGraduationCap
                  size={35}
                  color="white"
                  className="bg-transparent"
                />
              </div>
              <div className="h-100 border border-start border-0 border-secondary" />
            </div>
            <div className="d-flex flex-column align-items-start">
              <div className="bg-secondary bg-opacity-50 rounded-pill p-1 px-2 text-white mb-2">
                <p className="mb-0 bg-transparent small fw-bold opacity-75">
                  2014 - 2016
                </p>
              </div>
              <h5 className="fw-bold text-white">
                Intermadiate -{" "}
                <span className="opacity-75">GCMHS Dir Lower</span>
              </h5>
              <p className="text-light mb-0">
                I completed my school education at GCMH School, where I pursued
                a curriculum in general science. This institution provided me
                with a well-rounded education, fostering my curiosity and
                passion for science and its applications. It laid the foundation
                for my academic journey and instilled a love for learning.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";

import AreaHeading from "../layout/areaHeading";

function Resume() {
  return (
    <Container className="py-md-5 py-3">
      <AreaHeading word1="EDUCATION &" word2="EXPERIENCE" />

      {/* --- Experience Section --- */}
      <h4 className="text-warning fw-bold mt-md-5 mt-3 mb-3 text-glow" data-aos="fade-up">
        <MdOutlineWork size={28} className="me-2" style={{ verticalAlign: "middle" }} />
        Experience
      </h4>
      <Row className="g-4">
        <Col md={6} className="mb-md-auto mb-2" data-aos="fade-right" data-aos-delay="0">
          <div className="d-flex gap-2 p-3 glass-timeline h-100">
            <div className="d-flex flex-column align-items-center gap-1">
              <div className="bg-warning rounded-pill p-2 shadow timeline-icon">
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
                Developed web applications using React.js, Material UI, Tailwind
                CSS, Bootstrap, and Redux Toolkit for enterprise clients,
                ensuring high performance and scalability. Implemented
                comprehensive testing strategies (unit, integration, E2E)
                improving code quality by 40%. Deployed and managed live
                production applications on Ubuntu servers, ensuring 99.9% uptime.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <h6 className="fw-bold text-light opacity-75 mb-0 pt-1">
                  Tool's Used:
                </h6>
                {[
                  "Javascript",
                  "Typescript",
                  "React Js",
                  "Material UI",
                  "Tailwind CSS",
                  "Redux Toolkit",
                  "React Testing Library",
                  "Playwright",
                  "Github",
                  "Ubuntu Server",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-1 px-2 rounded-pill bg-secondary bg-opacity-50 text-white warning-hover skill-chip-3d"
                    role="button"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-md-auto mb-2" data-aos="fade-left" data-aos-delay="100">
          <div className="d-flex gap-2 p-3 glass-timeline h-100">
            <div className="d-flex flex-column align-items-center gap-1">
              <div className="bg-warning rounded-pill p-2 shadow timeline-icon">
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
                Built responsive and interactive user interfaces using React.js,
                Redux, and Tailwind CSS for live production applications.
                Participated in code reviews and contributed to team best
                practices, reducing bug reports by 25%. Collaborated with
                cross-functional teams ensuring seamless integration between
                frontend and backend systems.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <h6 className="fw-bold text-light opacity-75 mb-0 pt-1">
                  Tool's Used:
                </h6>
                {[
                  "Javascript",
                  "React Js",
                  "Redux",
                  "Tailwind CSS",
                  "React Testing Library",
                  "Github",
                  "Jira",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-1 px-2 rounded-pill bg-secondary bg-opacity-50 text-white warning-hover skill-chip-3d"
                    role="button"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-md-auto mb-2" data-aos="fade-right" data-aos-delay="200">
          <div className="d-flex gap-2 p-3 glass-timeline h-100">
            <div className="d-flex flex-column align-items-center gap-1">
              <div className="bg-warning rounded-pill p-2 shadow timeline-icon">
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
                Assisted in developing front-end features for web applications
                using React.js and modern JavaScript. Collaborated with senior
                developers on bug fixes and feature enhancements using Git
                version control.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <h6 className="fw-bold text-light opacity-75 mb-0 pt-1">
                  Tool's Used:
                </h6>
                {["HTML", "CSS", "Javascript", "React Js", "Git"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="p-1 px-2 rounded-pill bg-secondary bg-opacity-50 text-white warning-hover skill-chip-3d"
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
      </Row>

      {/* --- Education Section --- */}
      <h4 className="text-warning fw-bold mt-5 mb-3 text-glow" data-aos="fade-up">
        <FaGraduationCap size={28} className="me-2" style={{ verticalAlign: "middle" }} />
        Education
      </h4>
      <Row className="g-4">
        <Col md={6} className="mb-md-auto mb-2" data-aos="fade-right" data-aos-delay="0">
          <div className="d-flex gap-2 p-3 glass-timeline h-100">
            <div className="d-flex flex-column align-items-center gap-1">
              <div className="bg-warning rounded-pill p-2 shadow timeline-icon">
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
                Bachelor of Science in Software Engineering. Relevant
                coursework: Data Structures, Algorithms, Web Development,
                Software Engineering, Database Systems.
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-md-auto mb-2" data-aos="fade-left" data-aos-delay="100">
          <div className="d-flex gap-2 p-3 glass-timeline h-100">
            <div className="d-flex flex-column align-items-center gap-1">
              <div className="bg-warning rounded-pill p-2 shadow timeline-icon">
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
                Intermediate (Pre-Engineering) -{" "}
                <span className="opacity-75">Dir College of Science & Technology</span>
              </h5>
              <p className="text-light mb-0">
                Subjects: Mathematics, Physics, Chemistry, Computer Science.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;

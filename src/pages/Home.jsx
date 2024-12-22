import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Image } from "react-bootstrap";

import profilePic from "../assets/images/profile-pic.png";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

import myCv from "../assets/files/Muhammad Ali Software Engineer.pdf";

const Home = () => {
  return (
    <>
      <Container className="d-flex flex-md-row flex-column align-items-center">
        <Container className="me-auto text-light order-md-1 order-2 text-md-start text-center">
          <h1 className="fw-bolder fw-100 text-warning display-5">
            I'M MUHAMMAD ALI.
          </h1>
          <h5 className="text-md-start text-center">
            I'm a Pakistani based front‑end developer focused on crafting clean
            & user‑friendly experiences, I am passionate about building
            excellent software that improves the lives of those around me.
          </h5>
          <div className="d-flex justify-content-start py-2">
            <Button className="bg-warning text-dark border-0 me-2 home-btns fw-500 py-2 rounded-0">
              <Link
                className="text-decoration-none text-dark bg-transparent hire-me-link"
                to="https://www.upwork.com/freelancers/~019291f06f96df4423"
                target="_blank"
              >
                HIRE ME
              </Link>
            </Button>
            <Button
              variant="warning"
              className="bg-warning text-dark border-0 me-2 home-btns fw-500 py-2 rounded-0"
            >
              <Link
                className="text-decoration-none text-dark bg-transparent hire-me-link"
                to={myCv}
                download="Muhammad Ali Front-End Develper.pdf"
                target="_blank"
              >
                DOWNLOAD CV
              </Link>
            </Button>
          </div>
        </Container>
        <Container className="text-center mb-md-none mb-3 order-md-2 order-1">
          <Image
            src={profilePic}
            fluid
            rounded
            width={480}
            height={480}
            alt="profile image"
            className="rounded-pill"
          />
        </Container>
      </Container>
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;

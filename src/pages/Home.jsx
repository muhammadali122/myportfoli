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

import myCv from "../assets/files/Muhammad_Ali_CV.pdf";

const Home = () => {
  return (
    <>
      <Container className="d-flex flex-md-row flex-column align-items-center py-md-5 py-3">
        <Container
          className="me-auto text-light order-md-1 order-2 text-md-start text-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="fw-bolder display-5 gradient-text text-glow">
            I'M MUHAMMAD ALI.
          </h1>
          <h5 className="text-md-start text-center opacity-75" data-aos="fade-up" data-aos-delay="200">
            Results-driven Software Engineer with 3+ years of experience in
            full-stack development specializing in React.js, TypeScript, and
            Node.js. Passionate about building and deploying scalable production
            applications that improve the lives of those around me.
          </h5>
          <div className="d-flex justify-content-start py-2" data-aos="fade-up" data-aos-delay="400">
            <Button className="bg-warning text-dark border-0 me-2 home-btns fw-500 py-2 rounded-0 btn-glow">
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
              className="bg-warning text-dark border-0 me-2 home-btns fw-500 py-2 rounded-0 btn-glow"
            >
              <Link
                className="text-decoration-none text-dark bg-transparent hire-me-link"
                to={myCv}
                download="Muhammad-Ali-Software-Engineer.pdf"
                target="_blank"
              >
                DOWNLOAD CV
              </Link>
            </Button>
          </div>
        </Container>
        <Container
          className="text-center mb-md-none mb-3 order-md-2 order-1"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="profile-glow d-inline-block">
            <Image
              src={profilePic}
              fluid
              rounded
              width={480}
              height={480}
              alt="profile image"
              className="rounded-pill float-animation"
            />
          </div>
        </Container>
      </Container>
      <div className="section-divider my-3" />
      <About />
      <div className="section-divider my-3" />
      <Resume />
      <div className="section-divider my-3" />
      <Services />
      <div className="section-divider my-3" />
      <Skills />
      <div className="section-divider my-3" />
      <Projects />
      <div className="section-divider my-3" />
      <Contact />
    </>
  );
};

export default Home;

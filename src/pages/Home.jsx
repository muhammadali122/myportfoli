import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Image } from "react-bootstrap";

import profilePic from "../assets/images/profile-pic.webp";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Container className="d-flex flex-md-row flex-column align-items-center shadow rounded home-container">
        <Container className="text-center mb-md-none mb-3">
          <Image
            src={profilePic}
            fluid
            rounded
            width={500}
            height={500}
            alt="profile image"
          />
        </Container>
        <Container className="me-auto text-light">
          <h6 className="text-warning">HELLO!</h6>
          <h1 className="fw-bolder text-md-start text-center fw-100">
            I'm <span className="text-warning ">Muhammad Ali</span>
          </h1>
          <h3 className=" text-md-start text-center">
            A Front-End Developer based in Lahore
          </h3>
          <div className="d-flex mt-3 text-md-start justify-content-md-start justify-content-center">
            <Button className="rounded-pill bg-warning text-dark border-0 me-2 home-btns fw-500 py-2">
              <Link
                className="text-decoration-none text-dark bg-transparent hire-me-link"
                to="https://www.upwork.com"
                target="_blank"
              >
                HIRE ME
              </Link>
            </Button>
            <Button
              variant="outline-light"
              className="rounded-pill text-light home-btns fw-500 border py-2"
            >
              <Link
                className="text-decoration-none text-light bg-transparent my-work-link"
                to="https://www.upwork.com"
                target="_blank"
              >
                MY WORK
              </Link>
            </Button>
          </div>
        </Container>
      </Container>
      <About />
      <Resume />
      <Services />
    </>
  );
};

export default Home;

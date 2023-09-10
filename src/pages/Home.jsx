import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import profilePic from "../assets/images/profile-pic.png";

const Home = () => {
  return (
    <>
      <Container
    
        className="d-flex flex-md-row flex-column align-items-center"
      >
        <Container className="text-center mb-md-none mb-3">
          <Image src={profilePic} className="img-responsive" fluid />
        </Container>
        <Container className="me-auto text-light">
          <h5>HELLO!</h5>
          <h1 className="fw-bolder">
            I'm <span className="text-warning">Muhammad Ali</span>
          </h1>
          <h1 className="fw-bolder">A Front-End Developer</h1>
          <div className="d-flex mt-2">
            <Button className="rounded-pill bg-warning text-dark border-0 me-2 home-btns">HIRE ME</Button>
            <Button variant="outline-light"  className="rounded-pill text-light home-btns">MY WORK</Button>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Home;

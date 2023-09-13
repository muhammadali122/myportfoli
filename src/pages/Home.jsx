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
          <Image src={profilePic} className="img-responsive" fluid rounded/>
        </Container>
        <Container className="me-auto text-light">
          <h6 className="text-warning">HELLO!</h6>
          <h1 className="fw-bolder text-md-start text-center fw-100">
            I'm <span className="text-warning ">Muhammad Ali</span>
          </h1>
          <h3 className=" text-md-start text-center">A Front-End Developer based in Lahore</h3>
          <div className="d-flex mt-3 text-md-start justify-content-md-start justify-content-center">
            <Button className="rounded-pill bg-warning text-dark border-0 me-2 home-btns fw-500">HIRE ME</Button>
            <Button variant="outline-light"  className="rounded-pill text-light home-btns fw-500 border-">MY WORK</Button>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Home;

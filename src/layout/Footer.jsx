import React from "react";
import { Container, Image } from "react-bootstrap";
import logo from "../assets/images/Logo1.webp";

function Footer() {
  return (
    <>
      <Container className="mt-5 py-2 text-light text-center shadow d-flex justify-content-between align-items-center">
        <div className="d-md-block d-none">
          <Image src={logo} alt="logo" width={200}/>
        </div>
        <p>Copyright ©2023 All rights reserved by Muhammad Ali</p>
      </Container>
    </>
  );
}

export default Footer;

import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Container className="mt-5 py-2 text-light text-center shadow d-flex flex-md-row flex-column justify-content-between align-items-center">
        <div className="d-flex mb-md-0 mb-3">
          <Link
            target="_blank"
            className="text-decoration-none"
            to="https://www.linkedin.com/in/muhammad-ali-5b5339172/"
          >
            <FaLinkedinIn size={20} className="text-primary opacity-100" />
          </Link>
          <Link
            target="_blank"
            to="https://github.com/muhammadali122"
            className="text-decoration-none text-light"
          >
            <FaGithub size={20} className="mx-2" />
          </Link>
          <Link
            target="_blank"
            className="text-decoration-none text-light"
            to="https://www.facebook.com/profile.php?id=100010005828606"
          >
            <FaFacebook size={20} />
          </Link>
        </div>
        <p>Copyright ©2023 All rights reserved by Muhammad Ali</p>
      </Container>
    </>
  );
}

export default Footer;

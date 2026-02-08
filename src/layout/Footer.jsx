import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="section-divider mt-5" />
      <Container className="py-4 text-light text-center d-flex flex-md-row flex-column justify-content-between align-items-center">
        <div className="d-flex mb-md-0 mb-3 gap-3">
          <Link
            target="_blank"
            className="text-decoration-none social-icon-glow"
            to="https://www.linkedin.com/in/muhammad-ali-5b5339172/"
          >
            <FaLinkedinIn size={20} className="text-primary opacity-100" />
          </Link>
          <Link
            target="_blank"
            to="https://github.com/muhammadali122"
            className="text-decoration-none text-light social-icon-glow"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            target="_blank"
            className="text-decoration-none text-light social-icon-glow"
            to="https://www.facebook.com/profile.php?id=100010005828606"
          >
            <FaFacebook size={20} />
          </Link>
        </div>
        <p className="mb-0 opacity-75">Copyright All rights reserved by Muhammad Ali</p>
      </Container>
    </>
  );
}

export default Footer;

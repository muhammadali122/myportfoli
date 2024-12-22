import React from "react";
import { Container, Image } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

import logo from "../assets/images/Logo1.webp";

function Header() {
  return (
    <Container className="d-flex justify-content-between align-items-center py-3">
      <Image src={logo} width={200} height={50} alt="logo" />
      <div className="d-flex align-items-center gap-2">
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
    </Container>
  );
}

export default Header;

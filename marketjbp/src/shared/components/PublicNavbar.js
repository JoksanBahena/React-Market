import React from "react";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/img/marketplace.png";
import FeatherIcon from "feather-icons-react";

export const PublicNavbar = () => {
  const navigation = useNavigate();
  const handleLogin = () => {
    navigation("/auth");
  };

  return (
    <Navbar
      variant="dark"
      style={{ backgroundColor: "#001d3d", padding: "9px" }}
    >
      <Navbar.Brand>
        <Image
          className="ms-2"
          src={img}
          style={{ height: "auto", width: "30px" }}
        />{" "}
        Marketplace
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link to={"/contact"} className="nav-link">
          Contacto
        </Link>
      </Nav>
      <Button variant="outline-light" onClick={handleLogin}>
        <FeatherIcon icon={"log-in"} />
        Iniciar Sesión
      </Button>
    </Navbar>
  );
};

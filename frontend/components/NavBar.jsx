import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./src/assets/Logo/MLC Logo Name.png"
            height="30"
            className="d-inline-block align-top"
            alt="MidLife Coder logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
          <div className="d-grid">
            <Button variant="primary" size="lg" href="/contact">
              Contact Me
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

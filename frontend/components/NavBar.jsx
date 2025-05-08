import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import socLinks from "../src/data/socials";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand href="/">
          <div className="brand-logo">GD</div>
          {/* <img
            src="./src/assets/Logo/MLC Logo Name.png"
            height="30"
            className="d-inline-block align-top"
            alt="MidLife Coder logo"
          /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-link-contain" size="lg">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
          <div className="socials-contact">
            <div className="socials">
              {socLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <i className={link.iconClass}></i>
                </a>
              ))}
            </div>
            <div className="d-grid">
              <Button
                className="nav-btn"
                variant="primary"
                size="lg"
                href="/contact"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

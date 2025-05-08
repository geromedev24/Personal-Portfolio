import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function PageNotFound() {
  return (
    <>
      <Container className="notfound-container">
        <Row className="page-not-found align-items-center">
          <Col xs={12} md={6} className="text-center">
            <img
              src="../src/assets/images/Eneru.png"
              alt="Not Found"
              className="img-fluid"
            />
          </Col>
          <Col xs={12} md={6} className="notfound-description">
            <h1>Ooops! Page</h1>
            <h1>🛑 NOT FOUND. 🛑</h1>
            <h5>
              <br />
              Don't worry, it tends to happen sometimes. 😅 <br />
              <br /> Looks like I can't find the page you're trying to reach.
            </h5>
            <p>Please make sure to check the URL you're trying to access 😉</p>
            <p>
              But it could totally be my fault, so let me guide you back to my
              main page.
            </p>
            <Button className="notfound-redirect" href="/">
              Home Page
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

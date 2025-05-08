import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// research to incorporate prop and map method
import projectCards from "../src/data/projectcards";

export default function Projects() {
  return (
    <>
      <h1 className="projects-header"> Checkout my Projects! </h1>
      <Container className="projects">
        <Row xs={1} md={3} className="g-6">
          {Array.from(projectCards).map((card) => (
            <Col key={card.id} className="card-container">
              <Card>
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

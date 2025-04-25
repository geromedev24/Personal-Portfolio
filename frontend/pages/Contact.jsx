import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Contact() {
  return (
    <>
      <Form className="contact-me">
        <h1>I'd love to hear from you. Let's Connect.</h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Firstname"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control type="text" placeholder="Lastname" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Please enter your email address"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control placeholder="Mobile number" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" as={Col} controlId="formGridSource">
          <Form.Label>How did you hear about me?</Form.Label>
          <Form.Select>
            <option selected disabled hidden>
              Please choose..
            </option>
            <option>Google</option>
            <option>Social Media</option>
            <option>Friend</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridMessage">
          <Form.Label>What's on your mind?</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Type your message..."
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="info" className="ms-3">
          Donate
        </Button>
      </Form>
    </>
  );
}

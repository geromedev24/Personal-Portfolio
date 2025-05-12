import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Stack from "react-bootstrap/Stack";

// Modal
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="main-page">
      <Row>
        <Col className="main-message">
          <Stack gap={3}>
            <div className="p-1 msg-1">My name is Gerome Davao</div>
            <div className="p-1 pt-5 msg-2">
              Welcome to my personal website!<br></br>I'm a full-stack web
              developer from <br></br> Cavite, Philippines.
            </div>
            <div className="p-1 pt-5 msg-3">
              Let's turn your IDEAS into websites! 🚀💯
            </div>
          </Stack>
          <Button
            className="mt-5 mdl-btn"
            variant="primary"
            onClick={handleShow}
          >
            Hire me!
          </Button>

          {/* Modal */}
          <Modal size="md" centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Let's Work Together</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.modalFullName"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter your name"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.modalEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ModalTextarea1"
                >
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Send
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        <Col className="main-image">
          <img src="../src/assets/images/Eneru.png" alt="profile-picture" />
        </Col>
      </Row>
    </Container>
  );
}

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Stack from "react-bootstrap/esm/Stack";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-dark text-white text-center py-3">
        <Container>
          <Row>
            <Stack>
              <div className="copyright">
                Copyright &copy; The Midlife Coder
              </div>
            </Stack>
          </Row>
        </Container>
      </footer>
    </>
  );
}

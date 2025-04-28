import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Stack from "react-bootstrap/esm/Stack";

export default function Footer() {
  const items = document.querySelectorAll(".marquee div");
  items.forEach((item, index) => {
    item.style.animationDelay = `${-2400 * (5 - index)}ms`;
  });
  return (
    <>
      <div className="marquee">
        <div className="marq-logo">
          <i class="fa-brands fa-html5 fa-2xl">HTML</i>
        </div>
        <div className="marq-logo">
          <i class="fa-brands fa-css3-alt fa-2xl">CSS</i>
        </div>
        <div className="marq-logo">
          <i class="fa-brands fa-js fa-2xl">Javascript</i>
        </div>
        <div className="marq-logo">
          <i class="fa-brands fa-react fa-2xl">React</i>
        </div>
        <div className="marq-logo">
          <i class="fa-brands fa-bootstrap fa-2xl">Bootstrap</i>
        </div>
      </div>
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

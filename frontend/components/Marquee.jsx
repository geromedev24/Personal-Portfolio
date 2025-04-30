import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function Marquee() {
  useEffect(() => {
    const items = document.querySelectorAll(".marq-logo");
    items.forEach((item, index) => {
      item.style.animationDelay = `${-2400 * (5 - index)}ms`;
    });
  }, []);
  return (
    <Container className="py-2">
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
    </Container>
  );
}

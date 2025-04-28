import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Stack } from "react-bootstrap/esm";

import Carousel from "react-bootstrap/Carousel";

export default function About() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section>
      <Container className="about-sidepanel my-5">
        <h1 className="text-center">A little something about me</h1>
        <Row>
          <Col className="col-3 mt-5">
            <Stack gap={3}>
              <aside>
                <img
                  src="../src/assets/images/eneru.png"
                  alt="Profile picture"
                  width={250}
                />
                <div className="p-1">About</div>
                <div className="p-1">Hobbies</div>
                <div className="p-1">Others</div>
              </aside>
            </Stack>
          </Col>
          <Col className="mt-5">
            <div className="about-info">
              <h2 className="about-title text-center my-3">
                My name is Gerome
              </h2>
              <p>
                Over the past couple of years, I have worked as someone who
                sells ideas to people who needs help in getting things done more
                efficiently. I always tell my daughters that I sell other
                parents something that would make their jobs easier so they can
                have more time to spend with their kids.{" "}
              </p>
              <p>
                Now, after more than 10 years of working as a sales person, I
                find myself fascinated about how ideas can be turned into a
                website that is visually pleasing and at the same time fully
                functional and attracts user interaction.
              </p>
              <p>
                During my free time, I have spent hours studying and creating
                websites and applications that I believe could be useful to my
                prospects and future clients.
              </p>
            </div>
            <div className="about-info">
              <h2 className="about-title text-center my-3">
                What I do when I'm not selling and coding
              </h2>
              <p>My family and I love travelling and exploring new places.</p>
              <p>
                It's our way to celebrate success and enjoy the company of each
                other. Building core memories is something we make to a point
                that we do to add investments in our happy thoughts bank.
              </p>
              <p>
                Here are some of the places we've been through and I would love
                to hear from you any suggestions or recommendations where we can
                have our next adventure.
              </p>
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={null}
                data-bs-theme="dark"
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../src/assets/images/carousel-img-mph.jpg"
                    alt="Boracay"
                  />
                  <Carousel.Caption>
                    <h5 className="car-caption">Boracay Island</h5>
                    <p className="car-description">
                      Our first pick if the year has been a tremendous success.
                      Far from the metro with views and ambiance that captures
                      anyone's heart
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../src/assets/images/carousel-img-cmg.jpg"
                    alt="Camiguin Island"
                  />
                  <Carousel.Caption>
                    <h5 className="car-caption">Camiguin Island</h5>
                    <p className="car-description">
                      My wife's hometown island. This island feels so much like
                      home especially with families and friends that we miss. We
                      love visiting the island because life here is so relaxed
                      and simple.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../src/assets/images/carousel-img-bgo.jpg"
                    alt="Baguio"
                  />
                  <Carousel.Caption>
                    <h5 className="car-caption">Baguio</h5>
                    <p className="car-description">
                      Strawberries, horseback riding, botanical gardens and
                      park, and a nice cuddle weather. Baguio has been close to
                      our heart especially when the city turns a bit hot and
                      humid. We enjoy the nature and how we can sit and enjoy
                      hot chocolate and coffee everyday!
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../src/assets/images/carousel-img-tgy.jpg"
                    alt="Tagaytay"
                  />
                  <Carousel.Caption>
                    <h5 className="car-caption">Tagaytay</h5>
                    <p className="car-description">
                      Our budget destination since it's just an hour away. We
                      love eating a nice warm bulalo and yema cake while
                      enjoying the Taal volcano's view.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

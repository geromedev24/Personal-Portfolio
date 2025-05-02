import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Stack, Button } from "react-bootstrap/esm";

import Carousel from "react-bootstrap/Carousel";

export default function About() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="about-container">
      <Container>
        <h1 className="text-center my-5" id="about">
          A little something about me
        </h1>
        <Row className="gy-4">
          <Col
            xs={12}
            md={3}
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ minHeight: "100%" }}
          >
            <Stack gap={3} className="align-items-center">
              <aside className="text-center d-flex flex-column align-items-center">
                <div>
                  <img
                    src="../src/assets/images/eneru.png"
                    alt="Profile picture"
                    className="img-fluid"
                    style={{ maxWidth: "190px" }}
                  />
                </div>
                <div className="sidebar-button d-flex flex-wrap justify-content-center gap-2 mt-3">
                  <Button variant="primary" href="#about">
                    About
                  </Button>
                  <Button variant="secondary" href="#fun-facts">
                    Fun Facts
                  </Button>
                  <Button variant="success" href="#my-blog">
                    My Blog
                  </Button>
                </div>
              </aside>
            </Stack>
          </Col>
          <Col xs={12} md={8}>
            <div className="about-info">
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
              <h2 className="about-title text-start">Lazy Time</h2>
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
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  interval={null}
                >
                  <Carousel.Item className="overlay-container">
                    <img
                      className="d-block img-fluid"
                      src="../src/assets/images/carousel-img-mph.jpg"
                      alt="Boracay"
                    />
                    <Carousel.Caption>
                      <h5 className="car-caption">Boracay Island</h5>
                      <p className="car-description">
                        Our first pick if the year has been a tremendous
                        success. Far from the metro with views and ambiance that
                        captures anyone's heart
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="overlay-container">
                    <img
                      className="d-block img-fluid"
                      src="../src/assets/images/carousel-img-cmg.jpg"
                      alt="Camiguin Island"
                    />
                    <Carousel.Caption>
                      <h5 className="car-caption">Camiguin Island</h5>
                      <p className="car-description">
                        My wife's hometown island. This island feels so much
                        like home especially with families and friends that we
                        miss. We love visiting the island because life here is
                        so relaxed and simple.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="overlay-container">
                    <img
                      className="d-block img-fluid"
                      src="../src/assets/images/carousel-img-bgo.jpg"
                      alt="Baguio"
                    />
                    <Carousel.Caption>
                      <h5 className="car-caption">Baguio</h5>
                      <p className="car-description">
                        Strawberries, horseback riding, botanical gardens and
                        park, and a nice cuddle weather. We enjoy the nature and
                        how we can sit and enjoy hot chocolate and coffee
                        everyday!
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="overlay-container">
                    <img
                      className="d-block img-fluid"
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
              </p>
            </div>
            <div className="about-info">
              <h2 className="about-title text-start" id="fun-facts">
                Fun Facts
              </h2>
              <Stack gap={4}>
                <div className="fun-fact">
                  🎵 I play a little bit of acoustic and bass guitar. 🎵
                </div>
                <div className="fun-fact">
                  🚀 I love playing MMORPG games. 🚀
                </div>
                <div className="fun-fact">
                  🤐 I hate swimming under direct sunlight. 🤐
                </div>
                <div className="fun-fact">
                  ☕ I am a sucker for coffee regardless of the weather. ☕
                </div>
                <div className="fun-fact">
                  😆 My favorite place is Japan, though I've never been there.
                  😆
                </div>
              </Stack>
            </div>
            <div className="about-info">
              <h2 className="about-title" id="my-blog">
                My Blog
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

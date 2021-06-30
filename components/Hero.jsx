import React, { useState, useEffect } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const slides = [
  {
    id: 1,
    service: "Ar Condicionados",
    image: "ac.jpg",
  },
  {
    id: 2,
    service: "Frigorificos",
    image: "frigorifico.jpg",
  },
  {
    id: 3,
    isFemale: true,
    service: "Máquinas de Lavar",
    image: "washer.jpeg",
  },
  {
    id: 4,
    isFemale: true,
    service: "Máquinas da Loiça",
    image: "dishwasher.jpeg",
  },
  {
    id: 5,
    isFemale: true,
    service: "Caldeiras",
    image: "hotboiler.jpeg",
  },
  {
    id: 6,
    isFemale: true,
    service: "Caldeiras Industriais",
    image: "electric-boiler.jpeg",
  },
  {
    id: 7,
    service: "Esquentadores",
    image: "gas-boiler.jpeg",
  },
];

const Hero = () => {
  const [slide, setSlide] = useState(slides[0]);
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setSlide(slides[index++ % slides.length]);
    }, 7500);
    return () => clearInterval(interval);
  }, []);
  return (
    <TransitionGroup>
      <CSSTransition key={slide.id} classNames="messageout">
        <section
          key={slide.id}
          className="section position-relative"
          style={{
            background: `url(/images/${slide.image}) no-repeat center fixed`,
            backgroundSize: "cover",
            transition: "backgroud .2s ease-in-out",
            height: "90vh",
          }}
        >
          <Jumbotron fluid>
            <Container>
              <Row className="align-items-center">
                <Col
                  lg={5}
                  style={{
                    background: "rgba(255,255,255, 0.75)",
                    borderRadius: "5px",
                    padding: "12px",
                  }}
                >
                  <div className="pr-lg-5">
                    <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                      Serviço 24/7
                    </p>
                    <h1 className="mb-4 font-weight-normal line-height-1_4">
                      Instalação, manutenção e reparação de{" "}
                      <p
                        className="text-primary font-weight-medium"
                        style={{ transition: "all .2s ease-in-out" }}
                      >
                        {slide.service}
                      </p>
                    </h1>

                    <a href="#" className="btn btn-warning">
                      Ligue já <span className="ml-2 right-icon">&#8594;</span>
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-5 mt-lg-0">
                    <img
                      src="/images/Group Members.png"
                      alt=""
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
};
export default Hero;

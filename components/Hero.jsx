import React, { useState, useEffect } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";

const slides = [
  {
    id: 1,
    service: "Ar Condicionado",
    image: "ac.jpg",
  },
  {
    id: 2,
    service: "Frigorifico",
    image: "frigorifico.jpg",
  },
  {
      id: 3,
      isFemale: true,
    service: "Máquina de Lavar",
    image: "washer.jpeg",
  },
  {
      id: 4,
      isFemale: true,
    service: "Máquina da Loiça",
    image: "dishwasher.jpeg",
  },
  {
      id: 5,
      isFemale: true,
    service: "Caldeira",
    image: "hotboiler.jpeg",
  },
  {
      id: 6,
      isFemale: true,
    service: "Caldeira Industrial",
    image: "electric-boiler.jpeg",
  },
  {
      id: 7,
    service: "Esquentador",
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
    <section
      key={slide.id}
      className="section position-relative"
      style={{
        background: `url(/images/${slide.image}) no-repeat center fixed`,
        backgroundSize: "cover",
        transition: "backgroud .2s ease-in-out"
      }}
    >
      <Jumbotron fluid>
        <Container>
          <Row className="align-items-center">
            <Col
              lg={4}
              style={{
                background: "rgba(255,255,255, 0.75)",
                borderRadius: "5px",
                padding: "12px",
              }}
            >
              <div className="pr-lg-5">
                <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                  Reparações 24/7
                </p>
                <h1 className="mb-4 font-weight-normal line-height-1_4">
                  Problemas com {slide.isFemale ? "a sua": "o seu"}{" "}
                  <p className="text-primary font-weight-medium" style={{transition: "all .2s ease-in-out"}}>
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
  );
};
export default Hero;

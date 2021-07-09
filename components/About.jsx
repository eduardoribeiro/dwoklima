import React from "react";
import { Container, Row, Col } from "reactstrap";
const About = () => {
  return (
    <section className="section bg-light pb-5 pt-5" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h2 className="font-weight-normal text-dark">
                A <span className="text-warning">DwoKlima</span>
              </h2>
              <p className="text-muted">
                Com vários anos de experiência, somos a empresa indicada para
                resolver os seus problemas com os seus equipamentos
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">
              Trabalhamos para o satisfazer e o ajudar da melhor forma, agende já...
            </h2>
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={6}>
                <h2 className="font-weight-normal">
                  <span itemprop="telephone">
                    <a href="tel:+351935193196">935 193 196</a>
                  </span>
                </h2>
              </Col>
              <Col md={6}>
                <h2 className="font-weight-normal">
                  <span itemprop="telephone">
                    <a href="tel:+351931962186">931 962 186</a>
                  </span>
                </h2>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;

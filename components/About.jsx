import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
    return (
        <section className="section bg-light" id="about">
        <Container>
            <Row className="justify-content-center">
            <Col lg={6} md={8}>
                <div className="title text-center mb-5">
                <h3 className="font-weight-normal text-dark">A <span className="text-warning">DwoKlima</span></h3>
                <p className="text-muted">Com vários anos de experiência, somos a empresa indicada para resolver os seus problemas com os seus equipamentos</p>
                </div>
            </Col>
            </Row>
            <Row>
            <Col md={4}>
                <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Trabalhamos para o satisfazer e o ajudar da melhor forma</h2>
            </Col>
            <Col md={{ size:7, offset :1 }}>
                <Row>
                <Col md={6}>
                    <h6 className="text-dark font-weight-light f-20 mb-3">Our Mission</h6>
                    <p className="text-muted font-weight-light">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                </Col>
                <Col md={6}>
                    <h6 className="text-dark font-weight-light f-20 mb-3">Our Vision</h6>
                    <p className="text-muted font-weight-light">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                </Col>
                </Row>
            </Col>
            </Row>
        </Container>
        </section>
    );
}
export default About;
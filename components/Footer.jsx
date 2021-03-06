import React from "react";
import { Container, Row, Col } from "reactstrap";
import data from "../data/site_data.json";
import Image from "next/image";
const Footer = () => {
  const { geography } = data;
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer section pb-5 pt-5">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="mb-4">
              <h3 className="font-weight-normal">
                <div className="logo-container">
                  <Image
                    layout="fill"
                    src="/images/logo.png"
                    alt="DwoKlima"
                    className="logo"
                  />
                </div>
              </h3>
              <p>Lisboa</p>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              {geography.map((link, key) => (
                <Col key={key} md={4}>
                  <h5 className="text-dark mb-3">{link.title}</h5>
                  <ul className="list-unstyled company-sub-menu">
                    {link.child.map((fLink, key) => (
                      <li key={key}>{fLink}</li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">{currentYear} © ER Services</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;

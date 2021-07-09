import React from "react";
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Cidades",
      child: [
        { title: "Lisboa", link: "/" },
        { title: "Cascais", link: "/" },
        { title: "Oeiras", link: "/" },
        { title: "Sintra", link: "/" },
      ],
    },
    {
      id: 2,
      title: "About Us",
      child: [
        { title: "Contact Us", link: "/" },
        { title: "FAQs", link: "/" },
        { title: "Privacy Policy", link: "/" },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <section className="footer section pb-5 pt-5">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="mb-4">
              <h6 className="font-weight-normal">
                <span itemprop="telephone">
                  <a href="tel:+351935193196">935 193 196</a>
                </span>
              </h6>
              <h6 className="font-weight-normal">
              <span itemprop="telephone">
                  <a href="tel:+351931962186">931 962 186</a>
                </span>
              </h6>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              {links.map((link, key) => (
                <Col key={key} md={4}>
                  <h6 className="text-dark mb-3">{link.title}</h6>
                  <ul className="list-unstyled company-sub-menu">
                    {link.child.map((fLink, key) => (
                      <li key={key}>
                        <a href={fLink.link}>{fLink.title}</a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}

              <Col md={4}>
                <h6 className="text-dark mb-3">Estamos em</h6>
                <p className="text-muted f-14">Lisboa</p>
                <h6 className="text-muted pb-2">Email: email@email.com</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </Col>
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

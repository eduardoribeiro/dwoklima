import React from "react";
import { css, jsx } from "@emotion/react";
import { Jumbotron, Container, Row, Col } from "reactstrap";

const Content = ({ service }) => (
  <Jumbotron
    fluid
    css={css`
      position: absolute;
      bottom: 10vh;
      width: 100%;
    `}
  >
    <Container>
      <Row className="align-items-center">
        <Col
          lg={6}
          css={css`
            background: rgba(255,255,255, 0.75);
            border-radius: 5px;
            padding: 32px;
          `}
        >
          <div className="pr-lg-6">
            <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
              Serviço 24/7
            </p>
            <h1 className="mb-4 font-weight-normal line-height-1_4">
              Instalação, manutenção e reparação de{" "}
              <p className="text-primary font-weight-medium">{service}</p>
            </h1>

            <a href="#about" className="btn btn-warning">
              Ligue já <span className="ml-2 right-icon">&#8594;</span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Content;

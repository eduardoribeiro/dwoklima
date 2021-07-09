import React from "react";
import { css, jsx } from "@emotion/react";
import { Container, Row, Col } from "reactstrap";
import SVG from "./SVG";
import data from "../data/site_data.json";
const Service = () => {
  const { services } = data;
  return (
    <section className="section pt-5 pb-5" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h2 className="font-weight-normal text-dark">
                <span className="text-warning">Serviços</span>
              </h2>
              <p className="text-muted">
                Instalação, manutenção e reparação especializada de:
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, key) => {
            const { title, desc, icon } = service;
            return (
              <Col
                key={key}
                lg={3}
                className="pb-5 pt-5"
                css={css`
                  box-sizing: border-box;
                  cursor: pointer;
                  transition: all .2s ease-in-out;
                  border-radius: 8px;
                  &:hover {
                    box-shadow: 0px 0px 16px #aaa;
                    box-sizing: border-box;
                    display: inline-block;
                    background-color: #fff;
                  }
                `}
              >
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  `}
                >
                  <div className="mb-3 justify-content-center">
                    <SVG paths={icon.paths} width={'74px'} height={'74px'} viewport={icon.viewport} fill="#222" />
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-3">
                    {title}
                  </h5>
                  {desc && <p className="text-muted mb-3">{desc}</p>}
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
export default Service;

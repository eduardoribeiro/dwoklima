import React from "react";
import { css, jsx } from "@emotion/react";
import { Container, Row, Col } from "reactstrap";
import data from "../data/site_data.json";

const Brand = ({ brand, items }) => (
  <div
    css={css`
      width: calc(100% / ${items});
      height: auto;
      display: flex;
      align-items: center;
    `}
  >
    <img
      src={`vectors/${brand}.svg`}
      css={css`
        width: 100%;
        filter: grayscale(1);
        transition: all .2s ease-in-out;
        &:hover{
          filter: grayscale(0);
        }
      `}
    />
  </div>
);

const Marcas = () => {
  const { brands } = data;
  const items = brands.length;
  return (
    <section className="section pb-5 pt-5" id="brands">
      <Container>
        <Row className="justify-content-center p-6">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Marcas</span>
              </h3>
              <p className="text-muted">
                Fornecemos assistência técnica e suporte às mais importantes
                marcas de ar condicionados, bombas de calor, etc
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {brands.map((brand) => (
            <Brand brand={brand} items={items} />
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Marcas;

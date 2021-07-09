import React from "react";
import { css, jsx } from "@emotion/react";
import { Container, Row, Col } from "reactstrap";
import data from "../data/site_data.json";
import SVG from "./SVG";

const Marcas = () => {
  const { brands } = data;
  const items = brands.length;
  const size = parseInt(100 / (items/2));
  return (
    <section className="section pb-5 pt-5" id="brands">
      <Container>
        <Row className="justify-content-center p-6">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h2 className="font-weight-normal text-dark">
                <span className="text-warning">Marcas</span>
              </h2>
              <p className="text-muted">
                Fornecemos assistência técnica e suporte às mais importantes
                marcas de ar condicionados, bombas de calor, etc
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {brands.map((brand) => (
            <div
              css={css`
                width: calc(100% / (${items} / 2));
                height: auto;
                display: flex;
                align-items: center;
                justify-content: center;
              `}
              key={brand.name}
            >
              <SVG
                name={brand.name}
                paths={brand.paths}
                width={brand.name === 'mitsubishi' ? '50%' : '75%'}
                height={'100%'}
                viewport={brand.viewbox}
                fill={"#666"}
              />
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Marcas;

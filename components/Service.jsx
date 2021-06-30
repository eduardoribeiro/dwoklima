import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title: 'Ar Condicionados', desc : '', icon: '' },
    { title: 'Caldeiras', desc : '', icon: '' },
    { title: 'Esquentadores', desc : '', icon: '' },
    { title: 'Frigoríficos', desc : '', icon: '' },
    { title: 'Frio Industrial', desc : '', icon: '' },
    { title: 'Bombas de Calor', desc: '', icon: '' },
    { title: 'Aquecimento Central', desc: '', icon: '' },
    { title: 'Energia Solar', desc: '', icon: '' },
    { title: 'Ventilação', desc : '', icon: '' },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Serviços</span></h3>
              <p className="text-muted">Instalação, manutenção e reparação especializada de:</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={3} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;
import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';

const Slideshow = ({ slides }) => slides.map(slide => <Container key={slide.id}>
    <Row className="align-items-center">
        <Col lg={6}>
            <div className="pr-lg-5">
                <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Reparações 24/7</p>
                <h1 className="mb-4 font-weight-normal line-height-1_4">Problemas com o seu <span className="text-primary font-weight-medium">{slide.service}</span></h1>
                <p className="text-muted mb-4 pb-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <a href="#" className="btn btn-warning">
                    Find Out How <span className="ml-2 right-icon">&#8594;</span>
                </a>
            </div>
        </Col>
        <Col lg={6}>
            <div className="mt-5 mt-lg-0">
                <img src="/images/Group Members.png" alt="" className="img-fluid mx-auto d-block" />
            </div>
        </Col>
    </Row>
</Container>);

const slides = [
    {
        id: 1,
        service: "Ar Condicionado",
        image: "ac.jpg",
    }, {
        id: 2,
        service: "Frigorifico",
        image: "frigorifico.jpg",
    }
];

const Hero = () => {
    const [slide, setSlide] = useState(slides[0]);
    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(state.id);
          }, 1000);
          return () => clearInterval(interval);
    }, []);
  return (
      <section className="section position-relative">
          <Slideshow slides={slides} />
    </section>
  );
}
export default Hero;
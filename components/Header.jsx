import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 94) {
      setSticky(true);
    } else if (window.scrollY < 94) {
      setSticky(false);
    }
  };

  return (
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/#">
            <Image src="/images/logo.png" alt="DwoKlima" className="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#service">Serviços</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#brands">Marcas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">Sobre nós</NavLink>
              </NavItem>
            </Nav>
            <Button color="warning" href="#about">Agendar agora</Button>{" "}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

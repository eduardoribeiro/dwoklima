import React, { useState, useEffect, useCallback } from "react";
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
import PhoneNumber from './PhoneNumber';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const numbers = ["935 193 196", "931 962 186"];
  const [phoneNumber, setPhoneNumber] = useState(numbers[Math.floor(Math.random() * numbers.length)]);

  const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * numbers.length);
      setPhoneNumber(numbers[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

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
            <div className="logo-container">
            <Image layout="fill" src="/images/logo.png" alt="DwoKlima" className="logo" />
            </div>
          </NavbarBrand>
          {/* <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
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
            <Button href="#about">Agendar agora</Button>{" "}
          </Collapse> */}
          <PhoneNumber number={phoneNumber} />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

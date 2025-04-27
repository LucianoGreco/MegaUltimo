import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Navbar from "@/components/layout/navbar/Navbar.jsx";
import data from "@/data/pages/contactos";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // Empezamos con el header visible
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY === 0) {
        setIsVisible(true); // Mostrar si se hace scroll hacia arriba o está en la parte superior
      } else {
        setIsVisible(false); // Ocultar si se hace scroll hacia abajo
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (event) => {
      if (event.clientY < 50) {
        setIsVisible(true); // Mostrar si el mouse está en la parte superior de la página
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <HeaderContainer isVisible={isVisible}>
      <Link to="/">
        <Logo src={data.logo} alt="Logo de Mega Madera" />
      </Link>
      <Navbar />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100vw;
  height: 18vh;
  padding: 0 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(-100%)")};
`;

const Logo = styled.img`

  height: 50px;
  width: 100px;
`;

export default Header;

// src/components/cards/CardHome.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 230px;
  height: 280px;
  display: flex;
  flex-direction: column;
  padding: 0 0 20px 0;

  border-radius: 15px; /* Bordes más redondeados */
  box-shadow:  0 4px 8px rgba(181, 164, 164, 0.2);
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0 0 20px 0;


   background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px); /* Añadir desenfoque en el fondo si se desea */



  &:hover {
  background-color: var(--text-color);
  color: var(--background-color);
    transform: translateY(-5px); /* Levanta la tarjeta */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Aumenta la sombra en hover */
  }

  `;

const CardImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px; /* Bordes redondeados en la parte superior */

  `;

const CardContent = styled.div`
  padding: 10px;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 22px; /* Título más grande */
  margin-bottom: 10px;
  font-weight: bold;
  // color: var(--text-color);
`;

const CardDescription = styled.p`
  font-size: 14px;
  // color: var(--text-color);
  margin-bottom: 18px;
  flex-grow: 1;
`;

const CardButton = styled(Link)`
  padding: 12px 22px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 25px; /* Botón más redondeado */
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease, transform 0.3s ease;
  align-self: center;
  background-color: var(--background-color);

  &:hover {

    background-color: var(--background-color); /* Fondo del botón cambia */
    transform: scale(1.05); /* Efecto de escala */
  }
`;

const CardHome = ({ name, description, image, page }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardButton to={page}>Ir a {name}</CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default CardHome;

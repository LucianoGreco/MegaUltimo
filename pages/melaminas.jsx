import React, { useState } from "react";
import styled from "styled-components";
import NavItem from "@/components/layout/navbar/NavItem";
import Card from "@/components/cards/Card";
import productos from "@/data/components/melaminas"; // Asegúrate de que 'productos' esté correctamente estructurado.

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  background: #121212;
  color: #fff;
  margin: 10px 0;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const TextInstruction = styled.p`
  text-align: center;
  color: #ddd;
  font-size: 1rem;
  margin: 10px 0;
`;

const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Melaminas = () => {
  const [cardData, setCardData] = useState(null);

  return (
    <PageContainer>
      {/* Componente NavItem recibe productos */}
      <NavItem menuData={Object.values(productos)} setCardData={setCardData} />

      <MobileMenuContainer>
        <TextInstruction>Seleccione la melamina</TextInstruction>
      </MobileMenuContainer>

      {/* Muestra la tarjeta solo si hay datos */}
      {cardData && <Card infoCard={cardData} />}
    </PageContainer>
  );
};

export default Melaminas;

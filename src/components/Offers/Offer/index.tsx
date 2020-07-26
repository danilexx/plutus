import React from 'react';
import {
  Container,
  ExampleImage,
  Info,
  Descount,
  BottomSection,
  Site,
  LittleButton,
} from './styles';

const Offer = () => {
  return (
    <Container>
      <ExampleImage />
      <Info>
        <Descount>40% de desconto!</Descount>
        <BottomSection>
          <Site>xpto.com.br</Site>
          <LittleButton>Comprar</LittleButton>
        </BottomSection>
      </Info>
    </Container>
  );
};

export default Offer;

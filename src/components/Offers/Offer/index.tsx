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

const Offer = ({ item: { img, txt } }) => {
  console.log(img, txt);
  return (
    <Container>
      <ExampleImage source={img} />
      <Info>
        <Descount>{txt}</Descount>
        <BottomSection>
          <Site>xpto.com.br</Site>
          <LittleButton>Comprar</LittleButton>
        </BottomSection>
      </Info>
    </Container>
  );
};

export default Offer;

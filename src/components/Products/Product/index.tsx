import React from 'react';
import {
  Container,
  Image,
  Column,
  SubLabel,
  Label,
  RightArrow,
} from './styles';

const Product = () => {
  return (
    <Container>
      <Image />
      <Column>
        <SubLabel>Roupas</SubLabel>
        <Label>Lojas</Label>
      </Column>
      <Column>
        <SubLabel align="right">12 Jul</SubLabel>
        <Label align="right">R$ 100,00</Label>
      </Column>
      <RightArrow />
    </Container>
  );
};

export default Product;

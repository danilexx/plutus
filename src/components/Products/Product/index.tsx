import React from 'react';
import {
  Container,
  Image,
  Column,
  SubLabel,
  Label,
  RightArrow,
} from './styles';

const Product = ({ product: { section, card, date, value, image } }) => {
  return (
    <Container>
      <Image source={image} />
      <Column>
        <SubLabel>{section}</SubLabel>
        <Label>{card}</Label>
      </Column>
      <Column>
        <SubLabel align="right">{date}</SubLabel>
        <Label align="right">{value}</Label>
      </Column>
      <RightArrow />
    </Container>
  );
};

export default Product;

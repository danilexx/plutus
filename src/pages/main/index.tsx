import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Carousel from '../../components/Carousel';
import CardInfo from '../../components/CardInfo';
import { Container } from './styles';
import Offers from '../../components/Offers';
import Products from '../../components/Products';
const Main = () => {
  return (
    <Container>
      <Carousel />
      <CardInfo />
      <StatusBar style="auto" />
      <Offers />
      <Products />
    </Container>
  );
};

export default Main;

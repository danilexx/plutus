import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Carousel from '../../components/Carousel';
import CardInfo from '../../components/CardInfo';
import { Container } from './styles';
import Offers from '../../components/Offers';
import Products from '../../components/Products';
import UserHeader from '../../components/UserHeader';
import Nav from '../../components/Nav';
import Icon from '../../components/Icon';
import { FontAwesome } from '@expo/vector-icons';
import SpentSelector from '../../components/SpentSelector';
import LimitSection from '../../components/LimitSection';
import { Button } from '../../components/Button';

const Main = () => {
  return (
    <Container>
      <Nav>
        <Icon name="bell" notification={1} />
        <Icon iconPack={FontAwesome} name="cog" />
      </Nav>
      <UserHeader name="Rogério" />
      <SpentSelector />
      <LimitSection />
      <Button margin="10px 30px">Ver Calendario</Button>
      <Carousel />
      <CardInfo />
      <StatusBar style="auto" />
      <Offers />
      <Products />
    </Container>
  );
};

export default Main;

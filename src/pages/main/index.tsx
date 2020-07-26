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
import Page, { PageSeparator } from '../../components/Page';
import { useNavigation } from '@react-navigation/native';
import Card from '../../components/Card';

const Main = () => {
  const navigation = useNavigation();
  return (
    <Page
      nav={
        <Nav title="Meus Cartões">
          <Icon name="bell" notification={1} />
          <Icon
            iconPack={FontAwesome}
            onPress={() => {
              navigation.navigate('Preferences');
            }}
            name="cog"
          />
        </Nav>
      }>
      <PageSeparator />
      {/* <Container> */}
      {/* <UserHeader name="Rogério" /> */}
      {/* <SpentSelector /> */}
      {/* <LimitSection /> */}
      {/* <Button margin="10px 30px">Ver Calendario</Button> */}
      <Carousel />
      <CardInfo />
      <StatusBar style="auto" />
      <Offers />
      <Products />
      <Card type="submarinho" />
      {/* </Container> */}
    </Page>
  );
};

export default Main;

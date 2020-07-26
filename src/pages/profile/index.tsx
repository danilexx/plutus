import React from 'react';
import { View, Text } from 'react-native';
import Nav from '../../components/Nav';
import Icon from '../../components/Icon';
import { FontAwesome } from '@expo/vector-icons';
import UserHeader from '../../components/UserHeader';
import SpentSelector from '../../components/SpentSelector';
import LimitSection from '../../components/LimitSection';
import { SafeAreaView } from 'react-native-safe-area-context';
import AccountCard from '../../components/AccountCard';
import Offers from '../../components/Offers';
import { Container, Separator } from './styles';
import Page from '../../components/Page';
import { useNavigation } from '@react-navigation/native';

const accounts = [
  {
    bank: 341,
    account: '12345-6',
    agency: '0001',
    value: 200,
  },
  {
    bank: 260,
    account: '12345-6',
    agency: '0001',
    value: 200,
  },
];

const Profile = () => {
  const navigation = useNavigation();
  return (
    <Page
      nav={
        <Nav>
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
      <UserHeader name="Rogério" />
      <SpentSelector />
      <LimitSection />
      {accounts.map((ac, index) => (
        <AccountCard info={ac} key={index} />
      ))}
      <Offers />
      <Separator />
    </Page>
  );
};

export default Profile;

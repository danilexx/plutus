import React from 'react';
import { View, Text, Dimensions } from 'react-native';
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
import ConsumeProfile from '../../components/ConsumeProfile';

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

const width = Dimensions.get('window').width;
const height = 220;
const chartConfigs = [
  {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#00094D',
    backgroundGradientTo: '#B3B6CA',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  },
  {
    backgroundColor: '#022173',
    backgroundGradientFrom: '#022173',
    backgroundGradientTo: '#1b3fa0',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  },
  {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  },
  {
    backgroundColor: '#26872a',
    backgroundGradientFrom: '#43a047',
    backgroundGradientTo: '#66bb6a',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  },
  {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#000000',
    backgroundGradientTo: '#000000',
    color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`,
  },
  {
    backgroundColor: '#0091EA',
    backgroundGradientFrom: '#0091EA',
    backgroundGradientTo: '#0091EA',
    color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`,
  },
  {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  },
  {
    backgroundColor: '#b90602',
    backgroundGradientFrom: '#e53935',
    backgroundGradientTo: '#ef5350',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  },
  {
    backgroundColor: '#ff3e03',
    backgroundGradientFrom: '#ff3e03',
    backgroundGradientTo: '#ff3e03',
    color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`,
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
      <ConsumeProfile />

      {/* <PureChart data={sampleData} type="pie" /> */}
      <Separator />
    </Page>
  );
};

export default Profile;

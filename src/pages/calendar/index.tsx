import React from 'react';
import { View, Text } from 'react-native';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';
import Page, { PageSeparator } from '../../components/Page';
import Nav from '../../components/Nav';
import Icon from '../../components/Icon';
import { FontAwesome } from '@expo/vector-icons';
import { Row } from './styles';
import T from '../../components/T';
import { Section } from '../preferences/styles';
import { Separator } from '../receipt/styles';
import { useNavigation } from '@react-navigation/native';

LocaleConfig.locales.pt = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan.',
    'Fev.',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul.',
    'Ago',
    'Set.',
    'Out.',
    'Nov.',
    'Dez.',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qui.', 'Qua.', 'Sex.', 'Sab.'],
};
LocaleConfig.defaultLocale = 'pt';

const next = [
  {
    status: 'Vencida',
    provider: 'Submarinho',
    date: '20/07',
    value: 'R$ 500,00',
  },
  {
    status: 'Aberta',
    provider: 'Maisa',
    date: '05/08',
    value: 'R$ 500,00',
  },
  {
    status: 'Aberta',
    provider: 'C&H',
    date: '20/08',
    value: 'R$ 500,00',
  },
];
const previous = [
  {
    status: 'Paga',
    provider: 'Submarinho',
    date: '20/07',
    value: 'R$ 500,00',
  },
  {
    status: 'Paga',
    provider: 'Maisa',
    date: '05/08',
    value: 'R$ 500,00',
  },
  {
    status: 'Paga',
    provider: 'C&H',
    date: '20/08',
    value: 'R$ 500,00',
  },
];

const mapper = ({ value, date, provider, status }, index) => {
  const basicColor = status === 'Vencida' ? '#CC0000' : '#333';
  const statusColor =
    status === 'Vencida' ? '#CC0000' : status === 'Paga' ? '#8BCC19' : '#333';
  return (
    <Row key={index}>
      <T color={basicColor} width="90px" bold>
        {provider}
      </T>
      <T color={basicColor}>{date}</T>
      <T color={basicColor}>{value}</T>
      <T color={statusColor} width="60px" align="right">
        {status}
      </T>
    </Row>
  );
};

const CalendarScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Page
        nav={
          <Nav title="Calendário">
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
        {/* <PageSeparator /> */}
        <Calendar
          markedDates={{
            '2020-07-06': {
              selected: true,
              selectedColor: '#a1ec1d',
            },
            '2020-07-20': {
              selected: true,
              selectedColor: '#00094D',
            },
          }}
          style={{ marginVertical: 20 }}
          theme={{
            calendarBackground: '#f4f4f4',
          }}
        />
        <Section>
          <Row>
            <T bold size="20">
              Próximos vencimentos
            </T>
            <T bold color="#00094D">
              Ver mais
            </T>
          </Row>
          {next.map(mapper)}
        </Section>
        <Separator />
        <Section>
          <Row>
            <T bold size="20">
              Faturas vencimentos
            </T>
            <T bold color="#00094D">
              Ver mais
            </T>
          </Row>
          {previous.map(mapper)}
        </Section>
      </Page>
    </>
  );
};

export default CalendarScreen;

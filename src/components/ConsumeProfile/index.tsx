import React from 'react';

import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const pieChartData = [
  {
    name: 'Breja',
    quantity: 10,
    color: '#B3B6CA',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Eletro',
    quantity: 20,
    color: '#73789D',
    legendFontColor: '#73789D',
    legendFontSize: 15,
  },
  {
    name: 'Roupas',
    quantity: 25,
    color: '#40477A',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Alimentos',
    quantity: 47,
    color: '#00094D',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundColor: '#000000',
  backgroundGradientFrom: '#00094D',
  backgroundGradientTo: '#B3B6CA',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

import { Container } from './styles';
import T from '../T';

const width = Dimensions.get('window').width;
const height = 220;

const ConsumeProfile = () => {
  return (
    <Container>
      <T color="#333333" bold size="20" align="center">
        Perfil de Consumo
      </T>
      <PieChart
        data={pieChartData}
        height={height}
        width={width}
        chartConfig={chartConfig}
        accessor="quantity"
      />
      <T color="#666666" size="14" align="center">
        Gasto médio por mês
      </T>
      <T color="#00094D" bold size="20" align="center">
        R$ 1500,00
      </T>
    </Container>
  );
};

export default ConsumeProfile;

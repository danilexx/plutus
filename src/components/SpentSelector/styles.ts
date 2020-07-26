import styled from 'styled-components/native';
import BaseIcon from '../Icon';
import { FontAwesome } from '@expo/vector-icons';
import NumericInput from '@wwdrew/react-native-numeric-textinput';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(BaseIcon).attrs({
  color: '#051485',
  iconPack: FontAwesome,
  size: 20,
})`
  margin: 0 10px;
  padding: 20px 50px;
`;

export const Input = styled(NumericInput).attrs({
  type: 'currency',
  locale: 'pt-BR',
  currency: 'BRL',
})`
  border-bottom-color: #cccccc;
  border-bottom-width: 1px;
  font-size: 20px;
  font-weight: bold;
  color: #051485;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #333333;
  font-family: 'Inter';
`;

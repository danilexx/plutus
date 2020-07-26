import React from 'react';
import { Container, CardIdentifier, Label, BoldLabel, Buttons } from './styles';
import { Button } from '../Button';
import { useNavigation } from '@react-navigation/native';

const CardInfo = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <CardIdentifier>Cartão XPTO</CardIdentifier>
      <Label>Fatura Atual</Label>
      <BoldLabel>R$ 500, 00</BoldLabel>
      <Label>
        Limite Disponível: <BoldLabel>R$ 500,00</BoldLabel>
      </Label>
      <Label>Vencimento 05/08/2020</Label>
      <Buttons>
        <Button
          onPress={() => {
            navigation.navigate('Receipt');
          }}>
          Pagar Fatura
        </Button>
        <Button type="secondary">Gerar Boleto</Button>
      </Buttons>
    </Container>
  );
};

export default CardInfo;

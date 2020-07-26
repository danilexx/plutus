import React from 'react';
import {
  Container,
  CardIdentifier,
  Label,
  BoldLabel,
  Buttons,
  Button,
} from './styles';

const CardInfo = () => {
  return (
    <Container>
      <CardIdentifier>Cartão XPTO</CardIdentifier>
      <Label>Fatura Atual</Label>
      <BoldLabel>R$ 500, 00</BoldLabel>
      <Label>
        Limite Disponível: <BoldLabel>R$ 500,00</BoldLabel>
      </Label>
      <Buttons>
        <Button>Pagar Fatura</Button>
        <Button type="secondary">Gerar Boleto</Button>
      </Buttons>
    </Container>
  );
};

export default CardInfo;

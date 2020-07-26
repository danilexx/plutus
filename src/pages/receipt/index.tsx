import React from 'react';
import {
  Container,
  Header,
  T,
  Row,
  Group,
  Column,
  Separator,
  Ticket,
} from './styles';

interface ItemType {
  quantity: number;
  description: string;
  value: number;
  extraDescription?: string[];
}

const data: ItemType[] = [
  {
    quantity: 1,
    description: 'Descrição do item',
    value: 30.0,
  },
  {
    quantity: 3,
    description: 'Descrição do item',
    value: 50.0,
  },
  {
    quantity: 1,
    description: 'Descrição do item',
    value: 60.0,
    extraDescription: ['Mais descrição', 'Mais descrição', 'Mais descrição'],
  },
  {
    quantity: 1,
    description: 'Descrição do item',
    value: 20.0,
  },
];

const Receipt = () => {
  return (
    <Container>
      <Header>
        <T color="#666666">Nota Fiscal</T>
        <T bold size="22">
          Loja XPTO
        </T>
        <T color="#666666">12 Jul 2020, 12:11</T>
      </Header>
      {data.map(({ quantity, description, value, extraDescription }, index) => (
        <Row key={index}>
          <Group>
            <T>{quantity}x</T>
            <Column>
              <T>{description}</T>
              {extraDescription &&
                extraDescription.map((d, index2) => (
                  <T color="#666666" key={index2}>
                    {d}
                  </T>
                ))}
            </Column>
          </Group>
          <T>R$ {value.toFixed(2)}</T>
        </Row>
      ))}
      <Separator />
      <Row>
        <T bold size="20">
          Total
        </T>
        <T bold size="20">
          R$ 150,00
        </T>
      </Row>
      <Ticket />
    </Container>
  );
};

export default Receipt;

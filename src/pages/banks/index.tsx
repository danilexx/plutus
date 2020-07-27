import React from 'react';
import { Container } from './styles';
import Nav from '../../components/Nav';
import AccountCard from '../../components/AccountCard';

export interface BankType {
  bank: number;
  agency: string;
  account: string;
  value: number;
}

export const accounts: BankType[] = [
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

const Banks = () => {
  return (
    <Container>
      <Nav />
      {accounts.map((ac, index) => (
        <AccountCard info={ac} key={index} />
      ))}
    </Container>
  );
};

export default Banks;

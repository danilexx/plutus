import React from 'react';

import { Container, Info, BankImage, Row } from './styles';

import { BankType } from '../../pages/banks';
import T from '../T';

interface Props {
  info: BankType;
}

const getBank = (bank: number) => {
  switch (bank) {
    case 260:
      return {
        image: require('./assets/nubank.png'),
        bankServices: 'Nu Pagamentos S.A.',
        bankName: 'Nubank',
      };
    case 341:
      return {
        image: require('./assets/itau.png'),
        bankServices: 'Itaú Pagamentos S.A.',
        bankName: 'Itaú',
      };
    default: {
      return {
        image: require('./assets/nubank.png'),
        bankServices: 'Nu Pagamentos S.A.',
        bankName: 'Nubank',
      };
    }
  }
};

const AccountCard: React.FC<Props> = ({
  info: { value, agency, bank, account },
  ...props
}) => {
  const { image, bankServices, bankName } = getBank(bank);
  return (
    <Container {...props}>
      <BankImage source={image} />
      <Info>
        <Row>
          <T bold size={18}>
            {bankName}
          </T>
          <T bold size={18}>
            R$ {value.toFixed(2)}
          </T>
        </Row>
        <Row>
          <T>
            <T bold>Agência:</T> {agency}
          </T>
          <T>
            <T bold>Conta:</T> {account}
          </T>
        </Row>
        <Row>
          <T bold>Banco: {bank}</T>
          <T> {bankServices}</T>
        </Row>
      </Info>
    </Container>
  );
};

export default AccountCard;

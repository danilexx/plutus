import Nav from '../../components/Nav';
import Page, { PageSeparator } from '../../components/Page';

import React from 'react';
import AccountCard from '../../components/AccountCard';
import { accounts } from '../../pages/banks';
import T from '../../components/T';

const Pay = () => {
  const handlePress = () => {};
  return (
    <Page nav={<Nav title="Pagar Boleto" />}>
      <PageSeparator />
      <PageSeparator />
      <T align="center" size="25" margin="10px 0">
        Selecione uma Conta
      </T>
      {accounts.map((ac, index) => (
        <AccountCard onPress={() => handlePress(ac)} info={ac} key={index} />
      ))}
    </Page>
  );
};

export default Pay;

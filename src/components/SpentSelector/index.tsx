import React, { useState } from 'react';

import { Container, Title, Row, Input, Icon } from './styles';

const SpentSelector = () => {
  const [value, setValue] = useState(1300.0);

  const handleChangeText = (t) => {
    setValue(t);
  };
  return (
    <Container>
      <Title>Quanto quer gastar esse mês?</Title>
      <Row>
        <Icon
          onPress={() => {
            setValue((v) => Number(v) - 100);
          }}
          name="minus"
        />
        <Input
          value={value}
          keyboardType="numeric"
          onUpdate={handleChangeText}
        />
        <Icon
          onPress={() => {
            setValue((v) => Number(v) + 100);
          }}
          name="plus"
        />
      </Row>
    </Container>
  );
};

export default SpentSelector;

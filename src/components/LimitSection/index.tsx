import React from 'react';
import { Container, Bar, Progress, WarnText } from './styles';

const LimitSection = () => {
  return (
    <Container>
      <Bar>
        <Progress />
      </Bar>
      <WarnText>Você já gastou R$ 800, 00</WarnText>
    </Container>
  );
};

export default LimitSection;

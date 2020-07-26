import styled from 'styled-components/native';

const BaseText = styled.Text`
  font-family: Inter;
`;

export const Container = styled.View`
  padding: 0 30px;
`;

export const CardIdentifier = styled(BaseText)`
  font-weight: bold;
  color: #333;
  font-size: 20px;
`;

export const Label = styled(BaseText)`
  color: #666666;
  margin: 5px 0;
`;

export const BoldLabel = styled(BaseText)`
  font-size: 20px;
  font-weight: bold;
  color: #00094d;
`;

export const Buttons = styled.View`
  flex-direction: column;
`;

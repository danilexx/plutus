import React from 'react';
import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

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
`;

export const BoldLabel = styled(BaseText)`
  font-size: 20px;
  font-weight: bold;
  color: blue;
`;

export const Buttons = styled.View`
  flex-direction: column;
`;

const ButtonText = styled.Text<{ type: string }>`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.type === 'primary' ? 'white' : '#091eba')};
`;

export const Button = styled(({ children, type = 'primary', ...props }) => (
  <TouchableOpacity type={type} {...props}>
    <ButtonText type={type}>{children}</ButtonText>
  </TouchableOpacity>
))`
  background-color: ${(props) =>
    props.type === 'primary' ? '#091eba' : 'white'};
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 5px 0;

  ${(props) =>
    props.type === 'secondary' &&
    css`
      border: 2px #091eba;
    `}
`;

Button.defaultProps = {
  type: 'primary',
};

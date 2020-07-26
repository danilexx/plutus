import React from 'react';
import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const ButtonText = styled.Text<{ type: string }>`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.type === 'primary' ? 'white' : '#00094D')};
`;

export const Button = styled(({ children, type = 'primary', ...props }) => (
  <TouchableOpacity type={type} {...props}>
    <ButtonText type={type}>{children}</ButtonText>
  </TouchableOpacity>
))`
  background-color: ${(props) =>
    props.type === 'primary' ? '#00094D' : 'white'};
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: ${(p) => p.margin};
  ${(props) =>
    props.type === 'secondary' &&
    css`
      border: 2px #00094d;
    `}
`;

Button.defaultProps = {
  type: 'primary',
  margin: '5px 0',
};

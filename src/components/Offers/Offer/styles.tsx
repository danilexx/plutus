import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin: 10px;
  border: 1px #cccccc;
  width: 250px;
  /* height: 200px; */
`;

export const Info = styled.View`
  padding: 0 20px;
`;

export const ExampleImage = styled.View`
  background-color: grey;
  height: 200px;
  /* width: 150px; */
`;

export const BottomSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonText = styled.Text<{ type: string }>`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

export const LittleButton = styled(
  ({ children, type = 'primary', ...props }) => (
    <TouchableOpacity type={type} {...props}>
      <ButtonText type={type}>{children}</ButtonText>
    </TouchableOpacity>
  ),
)`
  background-color: #091eba;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 5px 10px;
`;

export const Site = styled.Text``;

export const Descount = styled.Text``;

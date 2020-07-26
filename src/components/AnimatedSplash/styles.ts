import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00094d;
`;

export const Gif = styled.Image.attrs({
  source: require('./assets/splash.gif'),
})``;

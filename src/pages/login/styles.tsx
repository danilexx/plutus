import styled, { css } from 'styled-components/native';

const centerize = css`
  width: 90%;
  max-width: 350px;
  margin: 0 auto;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding: 30px 0;
`;

export const Receipt = styled.Image.attrs({
  source: require('./assets/undraw_receipt_ecdd.png'),
})`
  margin: 10px auto;
  width: 250px;
  height: 250px;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: Inter;
  font-size: 18px;
  font-weight: bold;
  margin: 5px auto;
`;

export const Error = styled.Text`
  color: #ff0000;
`;

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin: 10px 0;
  width: 100%;
  padding: 0 20px;
`;

export const BankImage = styled.Image`
  height: 100%;
  flex: 1;
  resize-mode: contain;
`;

export const Info = styled.View`
  flex-direction: column;
  flex: 3;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 2px 0;
  align-items: center;
`;

export const Section = styled.View`
  margin: 10px 0;
  width: 100%;
  flex-direction: column;
  background-color: green;
  padding: 0 10px;
`;

export const Separator = styled.View`
  background-color: #cccccc;
  width: 90%;
  margin: 10px auto;
  height: 1px;
`;

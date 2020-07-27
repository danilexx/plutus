import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: red; */
  padding: 25px 20px;
  position: absolute;
  top: 20px;
  z-index: 50;
  /* left: 0; */
`;

export const Title = styled.Text<{
  parentSizes: { width: number; height: number };
}>`
  position: absolute;
  width: 200px;
  font-family: Inter;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 20px;
  height: 30px;
  top: ${(p) => p.parentSizes.height / 2 - 15}px;
  left: ${(p) => p.parentSizes.width / 2 - 100}px;
  text-align: center;
  background-color: #f4f4f4;
  border-radius: 500px;
`;

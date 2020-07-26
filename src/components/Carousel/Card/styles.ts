import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ st: any }>`
  height: 200px;
  /* align-items: center; */
  background-color: grey;
  border-radius: 15px;
  elevation: 1;
  margin: 0px 30px;
  ${(props) => props.st}
`;

export const BrandLogo = styled.Image`
  resize-mode: cover;
  /* width: 90px; */
  margin: 0 10px;
  /* background-color: red; */
`;

export const TopRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 10px 0;
  padding: 0 10px;
`;

export const DualBrand = styled.View``;

export const CodeRow = styled.View`
  flex-direction: row;
  margin: auto 10px;
  align-items: center;
  justify-content: center;
`;

export const Code = styled.Text<{ st: any }>`
  font-weight: bold;
  margin: 0 10px;
  font-size: 18px;
  ${(props) => props.st}
`;

export const CopyIcon = styled.Image.attrs({
  source: require('./assets/copy.png'),
})``;

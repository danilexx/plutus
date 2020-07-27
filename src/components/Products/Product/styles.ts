import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 0 20px;
  flex-direction: row;
  margin: 10px 0;
  /* height: 50px; */
  flex: 1;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  source: require('./assets/shirt.png'),
})`
  width: 40px;
  height: 40px;
  resize-mode: contain;
`;

const BaseLabel = styled.Text<{ align?: string }>`
  font-family: 'Inter';
  text-align: ${(props) => (props.align === 'right' ? 'right' : 'left')};
  color: #333;
`;
export const Header = styled(BaseLabel)`
  font-size: 22px;
`;

export const SubLabel = styled(BaseLabel)`
  font-size: 16px;
`;

export const Label = styled(BaseLabel)`
  font-weight: bold;
  font-size: 18px;
`;

export const Column = styled.View`
  flex: 1;
  margin: 0 15px;
`;

export const RightArrow = styled.Image.attrs({
  source: require('./assets/right-arrow.png'),
})`
  height: 14px;
  resize-mode: contain;
`;

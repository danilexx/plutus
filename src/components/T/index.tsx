import styled from 'styled-components/native';

const T = styled.Text<{
  color?: string;
  bold?: boolean;
  size?: number | string;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
  margin?: string;
}>`
  font-family: Inter;
  color: ${(p) => p.color};
  font-weight: ${(p) => (p.bold ? 'bold' : 'normal')};
  font-size: ${(p) => p.size}px;
  text-align: ${(p) => p.align};
  width: ${(p) => p.width};
  margin: ${(p) => p.margin};
`;
T.defaultProps = {
  color: '#333',
  bold: false,
  size: 14,
  align: 'left',
  width: 'auto',
  margin: 0,
};

export default T;

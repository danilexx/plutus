import styled from 'styled-components/native';

const T = styled.Text<{
  color?: string;
  bold?: boolean;
  size?: number | string;
  align?: 'left' | 'center' | 'right';
}>`
  font-family: Inter;
  color: ${(p) => p.color};
  font-weight: ${(p) => (p.bold ? 'bold' : 'normal')};
  font-size: ${(p) => p.size}px;
  text-align: ${(p) => p.align};
`;
T.defaultProps = {
  color: '#333',
  bold: false,
  size: 14,
  align: 'left',
};

export default T;

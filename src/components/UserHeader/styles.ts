import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
`;

export const ProfilePic = styled.Image.attrs({
  source: require('./assets/profilepic.png'),
})``;

export const Title = styled.Text`
  font-family: Inter;
  font-size: 18px;
  font-weight: bold;
  margin: 5px auto;
`;

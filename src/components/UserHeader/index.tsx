import React from 'react';
import { Container, ProfilePic, Title } from './styles';
import Icon from '../Icon';
import { MaterialIcons } from '@expo/vector-icons';
interface Props {
  name: string;
}

const UserHeader: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <ProfilePic />
      <Title>Olá, {name}!</Title>
      <Icon iconPack={MaterialIcons} name="keyboard-arrow-down" />
    </Container>
  );
};

export default UserHeader;

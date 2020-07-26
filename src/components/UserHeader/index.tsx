import React from 'react';
import { Container, ProfilePic, Title } from './styles';

interface Props {
  name: string;
}

const UserHeader: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <ProfilePic />
      <Title>Olá, {name}!</Title>
    </Container>
  );
};

export default UserHeader;

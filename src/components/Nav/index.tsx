import React from 'react';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Container } from './styles';
import Icon from '../../components/Icon';
const Nav: React.FC = ({ children }) => {
  return (
    <Container>
      {children ? (
        children
      ) : (
        <>
          <Icon iconPack={AntDesign} name="arrowleft" />
          <Icon iconPack={FontAwesome} name="cog" />
        </>
      )}
    </Container>
  );
};

export default Nav;

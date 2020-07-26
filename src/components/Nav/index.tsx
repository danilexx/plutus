import React, { useState } from 'react';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Container, Title } from './styles';
import Icon from '../../components/Icon';
const Nav: React.FC<{ title?: string }> = ({ children, title }) => {
  const handleLayout = (s) => {
    const { height, width } = s.nativeEvent.layout;
    set([height, width]);
  };
  const [[height, width], set] = useState([0, 0]);
  return (
    <Container onLayout={handleLayout}>
      {children ? (
        children
      ) : (
        <>
          <Icon iconPack={AntDesign} name="arrowleft" />
          <Icon iconPack={FontAwesome} name="cog" />
        </>
      )}
      {title && <Title parentSizes={{ height, width }}>{title}</Title>}
    </Container>
  );
};

export default Nav;

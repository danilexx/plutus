import React, { useState } from 'react';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Container, Title } from './styles';
import Icon from '../../components/Icon';
import { useNavigation } from '@react-navigation/native';
const Nav: React.FC<{ title?: string }> = ({ children, title }) => {
  const handleLayout = (s) => {
    const { height, width } = s.nativeEvent.layout;
    set([height, width]);
  };
  const [[height, width], set] = useState([0, 0]);
  const navigation = useNavigation();
  return (
    <Container onLayout={handleLayout}>
      {children ? (
        children
      ) : (
        <>
          <Icon
            iconPack={AntDesign}
            onPress={() => {
              navigation.goBack();
            }}
            name="arrowleft"
          />
          <Icon
            onPress={() => {
              navigation.navigate('Preferences');
            }}
            iconPack={FontAwesome}
            name="cog"
          />
        </>
      )}
      {title && <Title parentSizes={{ height, width }}>{title}</Title>}
    </Container>
  );
};

export default Nav;

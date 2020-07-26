import React from 'react';
import { Container, Gif } from './styles';
import { NativeSyntheticEvent, ImageLoadEventData } from 'react-native';

const AnimatedSplash = ({
  onLoad,
}: {
  onLoad: (event: NativeSyntheticEvent<ImageLoadEventData>) => void;
}) => {
  return (
    <Container>
      <Gif onLoad={onLoad} />
    </Container>
  );
};

export default AnimatedSplash;

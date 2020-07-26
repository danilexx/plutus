import React, { useState } from 'react';
import { Container, Row, Slider, Thumb, TextSection } from './styles';
import T from '../T';
import { useSpring } from 'react-spring';

const StyledSwitch = ({ value, onValueChange }: any) => {
  const SliderSize = 30;
  const { left, backgroundColor } = useSpring({
    left: value ? SliderSize * 0.85 : 0,
    backgroundColor: value ? '#00094D' : '#E5E5EA',
    config: {
      duration: 100,
    },
  });
  return (
    <Slider
      style={{ backgroundColor }}
      onPress={() => onValueChange(!value)}
      SliderSize={SliderSize}>
      <Thumb style={{ left }} SliderSize={SliderSize} />
    </Slider>
  );
};

export const RegularSwitch: React.FC<{ label: string }> = ({
  label,
  ...props
}) => {
  const [v, toggle] = useState(true);
  return (
    <Container>
      <Row>
        <StyledSwitch value={v} onValueChange={(s) => toggle(s)} {...props} />
        <TextSection>
          <T>{label}</T>
        </TextSection>
      </Row>
    </Container>
  );
};

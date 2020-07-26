import styled from 'styled-components/native';
import { animated } from 'react-spring';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  /* max-width: 350px; */
  margin: 10px auto;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledSwitch = styled.Switch.attrs((props) => {
  return {
    trackColor: {
      false: '#ffffff',
      true: '#00094D',
    },
    thumbColor: '#fff',
  };
})`
  margin-right: 10px;
`;

export const Error = styled.Text`
  font-size: 10px;
  color: #ff0000;
  /* margin: 5px 0; */
`;

export const Slider = styled(animated(TouchableOpacity))<{
  SliderSize: number;
}>`
  background-color: #00094d;
  border-radius: 500px;
  width: ${(p) => p.SliderSize * 1.8}px;
  height: ${(p) => p.SliderSize}px;
  margin-right: 10px;
  justify-content: center;
`;

export const Thumb = styled(animated(View))<{ SliderSize: number }>`
  width: ${(p) => p.SliderSize * 0.9}px;
  height: ${(p) => p.SliderSize * 0.9}px;
  background-color: white;
  border-radius: ${(p) => p.SliderSize / 2}px;
  position: absolute;
  left: ${(p) => p.SliderSize * 0.8}px;
  top: ${(p) => p.SliderSize * 0.05}px;
`;

export const TextSection = styled.View`
  flex: 1;
`;

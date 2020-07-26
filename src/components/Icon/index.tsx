import React from 'react';
import { BaseIcon, Notification, Container } from './styles';
import { GestureResponderEvent } from 'react-native';

interface Props {
  size?: number;
  iconPack?: any;
  name: string;
  color?: string;
  notification?: number;
  style?: any;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Icon: React.FC<Props> = ({
  size = 25,
  color = '#333333',
  iconPack,
  name,
  onPress,
  notification,
  style,
  ...p
}) => (
  <Container style={style} size={size} onPress={onPress}>
    <BaseIcon
      size={size}
      color={color}
      {...(iconPack ? { as: iconPack } : {})}
      name={name}
      {...p}
    />
    {notification && <Notification>{notification}</Notification>}
  </Container>
);

export default Icon;

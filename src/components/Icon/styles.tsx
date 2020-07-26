import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
export const BaseIcon = styled(MaterialCommunityIcons)`
  margin: 0 20px;
  width: ${(p) => p.size}px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const notificationSize = 18;

const NotificationText = styled.Text`
  color: white;
  font-family: 'Inter';
  font-weight: bold;
  font-size: ${notificationSize / 1.5}px;
`;
export const Notification = styled(({ children, ...p }) => (
  <View {...p}>
    <NotificationText>{children}</NotificationText>
  </View>
))`
  background-color: #cc0000;
  color: white;
  width: ${notificationSize}px;
  height: ${notificationSize}px;
  text-align: center;
  font-size: ${notificationSize / 1.5}px;
  justify-content: center;
  align-items: center;
  border-radius: ${notificationSize / 2}px;
  position: absolute;
  right: -${notificationSize / 3.5}px;
  top: -${notificationSize / 3.5}px;
`;

export const Container = styled.TouchableOpacity<{ size: number }>`
  /* position: relative; */
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  justify-content: center;
  align-items: center;
`;

import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 20px;
  margin: 8px 0;
`;

export const Group = styled.View`
  flex-direction: row;
`;

export const Column = styled.View`
  margin: 0 10px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin: 10px 0;
  background-color: #cccccc;
`;

export const TicketRest = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export const Ticket = styled((p) => (
  <>
    <Image {...p} source={require('../../assets/images/ticket.png')} />
    <TicketRest />
  </>
))`
  /* flex: 1; */
  width: 100%;
  margin-top: 10px;
  resize-mode: stretch;
  /* flex: 1; */
`;

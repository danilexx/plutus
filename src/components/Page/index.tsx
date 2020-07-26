import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.ScrollView``;

export const PageSeparator = styled.View`
  width: 100%;
  margin: 20px 0;
`;
export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  padding-bottom: 20px;
`;

const Page = ({ nav, children }) => {
  return (
    <Wrapper>
      {nav && nav}
      <Container>{children}</Container>
      <PageSeparator />
    </Wrapper>
  );
};

export default Page;

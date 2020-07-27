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
  padding-bottom: 22px;
`;

const Page = ({ nav, children, separator = true }) => {
  return (
    <Wrapper>
      {nav && nav}
      <Container>{children}</Container>
      {separator && <PageSeparator />}
    </Wrapper>
  );
};

export default Page;

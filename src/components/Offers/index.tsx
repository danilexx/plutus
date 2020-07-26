import React from 'react';
import { FlatList } from 'react-native';
import Offer from './Offer';
import { Wrapper } from './styles';

const Offers = () => {
  return (
    <Wrapper>
      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(e) => e.toString()}
        renderItem={() => <Offer />}
        horizontal
      />
    </Wrapper>
  );
};

export default Offers;

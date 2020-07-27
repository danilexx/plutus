import React from 'react';
import { FlatList } from 'react-native';
import Offer from './Offer';
import { Wrapper } from './styles';

const data = [
  {
    id: 1,
    img: require('./assets/img1.png'),
    txt: 'De: R$ 29,99 Por: R$ 15,99',
  },
  { id: 2, img: require('./assets/img2.png'), txt: '40% de desconto' },
];

const Offers = () => {
  return (
    <Wrapper>
      <FlatList
        data={data}
        keyExtractor={(e) => e.id.toString()}
        renderItem={({ item }) => {
          return <Offer item={item} />;
        }}
        horizontal
      />
    </Wrapper>
  );
};

export default Offers;

import React from 'react';
// import { FlatList } from 'react-native';
import { Wrapper, Header } from './styles';
import Product from './Product';

const Products = () => {
  return (
    <Wrapper>
      <Header>Histórico de Compras</Header>
      {/* <FlatList
        data={[1, 2, 3]}
        keyExtractor={(e) => e.toString()}
        renderItem={() => }
      /> */}
      {[1, 2, 3].map((e, index) => (
        <Product key={index} />
      ))}
    </Wrapper>
  );
};

export default Products;

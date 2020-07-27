import React from 'react';
// import { FlatList } from 'react-native';
import { Wrapper, Header } from './styles';
import Product from './Product';

const products = [
  {
    image: require('./Product/assets/shirt.png'),
    section: 'Roupas',
    card: 'Cartão Maisa',
    date: '12 Jul',
    value: 'R$ 160,00',
  },
  {
    image: require('./Product/assets/phone.png'),
    section: 'Eletrônico',
    card: 'Cartão Submarinho',
    date: '11 Jul',
    value: 'R$ 800,00',
  },
  {
    image: require('./Product/assets/shirt.png'),
    section: 'Roupas',
    card: 'Cartão Maisa',
    date: '09 Jul',
    value: 'R$ 100,00',
  },
  {
    image: require('./Product/assets/food.png'),
    section: 'Alimentos',
    card: 'Cartão Submarinho',
    date: '08 Jul',
    value: 'R$ 150,00',
  },
  {
    image: require('./Product/assets/toys.png'),
    section: 'Brinquedos',
    card: 'Cartão Submarinho',
    date: '08 Jul',
    value: 'R$ 120,00',
  },
];

const Products = () => {
  return (
    <Wrapper>
      <Header>Histórico de Compras</Header>
      {/* <FlatList
        data={[1, 2, 3]}
        keyExtractor={(e) => e.toString()}
        renderItem={() => }
      /> */}
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </Wrapper>
  );
};

export default Products;

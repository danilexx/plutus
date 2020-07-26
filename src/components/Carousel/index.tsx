import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Card from './Card';
import { Wrapper } from './styles';

import Carousel from 'react-native-anchor-carousel';

const { width } = Dimensions.get('window');

export type brand1Types = 'marisa' | 'c&a';
export type brand2Types = 'itaucard' | 'bradescard';
export type brand3Types = 'mastercard' | 'visa';
export interface CardType {
  backgroundColor: string;
  brand1: brand1Types;
  brand2: brand2Types;
  brand3: brand3Types;
}

const data: CardType[] = [
  {
    backgroundColor: '#FFBAE3',
    brand1: 'marisa',
    brand2: 'itaucard',
    brand3: 'mastercard',
  },
  {
    backgroundColor: '#FFBAE3',
    brand1: 'c&a',
    brand2: 'bradescard',
    brand3: 'visa',
  },
  {
    backgroundColor: '#FFBAE3',
    brand1: 'marisa',
    brand2: 'itaucard',
    brand3: 'mastercard',
  },
  {
    backgroundColor: '#FFBAE3',
    brand1: 'c&a',
    brand2: 'bradescard',
    brand3: 'visa',
  },
  // {
  //   backgroundColor: '#FFBAE3',
  //   brand1: 'marisa',
  //   brand2: 'itaucard',
  //   brand3: 'mastercard',
  // },
];

const itemWidth = 350;

const Slider = () => {
  const carouselRef = React.useRef<any>();
  return (
    <Wrapper>
      <Carousel
        data={data}
        inActiveOpacity={1}
        separatorWidth={-50}
        renderItem={({ item, index }: { item: CardType; index: number }) => {
          return (
            <Card
              card={item}
              onPress={() => {
                carouselRef.current?.scrollToIndex(index);
              }}
            />
          );
        }}
        itemWidth={itemWidth}
        containerWidth={width}
        ref={carouselRef}
      />
    </Wrapper>
  );
};

// export default class NumberCarousel extends Component {
//   renderItem = ({ item, index }) => {
//     const { backgroundColor } = item;
//     return (
//       <TouchableOpacity
//         style={[styles.item, { backgroundColor }]}
//         onPress={() => {
//           this.numberCarousel.scrollToIndex(index);
//         }}>
//         <Text style={styles.text}>{index.toString()}</Text>
//       </TouchableOpacity>
//     );
//   };

//   render() {
//     return (

//     );
//   }
// }

export default Slider;

import React from 'react';
import {
  Container,
  BrandLogo,
  DualBrand,
  TopRow,
  CodeRow,
  Code,
  CopyIcon,
} from './styles';
import { CardType, brand1Types } from '../index';
import { css } from 'styled-components';

const getStyles = (
  cardType: brand1Types,
): { containerStyles: any; codeStyles: any } => {
  switch (cardType) {
    case 'marisa': {
      return {
        containerStyles: css`
          background-color: #ffbae3;
        `,
        codeStyles: css`
          color: #333333;
        `,
      };
    }
    case 'c&a': {
      return {
        containerStyles: css`
          background-color: #ffff;
        `,
        codeStyles: css`
          color: #2d509f;
        `,
      };
    }
    default: {
      return { containerStyles: css``, codeStyles: css`` };
    }
  }
};

const brands = {
  marisa: require('./assets/marisa.png'),
  'c&a': require('./assets/ca.png'),
  mastercard: require('./assets/mastercard.png'),
  itaucard: require('./assets/itaucard.png'),
  visa: require('./assets/visa.png'),
  bradescard: require('./assets/bradescard.png'),
};

const Card = ({ card, ...props }: { card: CardType }) => {
  const { containerStyles, codeStyles } = getStyles(card.brand1);
  return (
    <Container st={containerStyles} {...props}>
      <TopRow>
        <BrandLogo source={brands[card.brand1]} />
        <DualBrand>
          <BrandLogo source={brands[card.brand2]} />
          <BrandLogo source={brands[card.brand3]} />
        </DualBrand>
      </TopRow>
      <CodeRow>
        <Code st={codeStyles}>0000 0000 0000 0000</Code>
        <CopyIcon />
      </CodeRow>
    </Container>
  );
};

export default Card;

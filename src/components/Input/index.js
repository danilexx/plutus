import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import { Container, TextInput, Label, Error, Line, Eye } from './styles';
import BaseInput from './base';
import useToggle from 'react-use/lib/useToggle';
import MaskedBaseInput from './masked';

const BasicTemplate = ({ children, label, error }) => (
  <Container>
    {label && <Label>{label}</Label>}
    {children}
    <Line />
    {error && <Error>{error}</Error>}
  </Container>
);

function Input({ name, label, ...rest }) {
  const props = useField(name);
  const { error } = props;
  return (
    <BasicTemplate label={label} error={error}>
      <BaseInput {...props} {...rest} />
    </BasicTemplate>
  );
}

export const SecretInput = ({ name, label, ...rest }) => {
  const props = useField(name);
  const { error } = props;
  const [isHidden, toggle] = useToggle(true);
  return (
    <BasicTemplate label={label} error={error}>
      <BaseInput secureTextEntry={isHidden} {...props} {...rest} />
      <Eye onPress={() => toggle()} name={isHidden ? 'eye' : 'eye-slash'} />
    </BasicTemplate>
  );
};

export const SimpleMaskedInput = ({
  name,
  label,
  mask,
  ref,
  options,
  ...rest
}) => {
  const props = useField(name);
  const { error } = props;
  return (
    <BasicTemplate label={label} error={error}>
      <MaskedBaseInput
        ref={ref}
        {...props}
        mask={mask}
        options={options}
        {...rest}
      />
    </BasicTemplate>
  );
};
export default Input;

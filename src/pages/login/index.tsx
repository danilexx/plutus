import React, { useRef, useState } from 'react';
import Firebase from '../../config/firebase';
import { Form } from '@unform/mobile';
import { Container, Receipt, Title, Error } from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import Input, { SecretInput } from '../../components/Input';

const Login = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (data: any) => {
    const { email, password } = data;
    try {
      await Firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Receipt />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          label="E-MAIL"
          placeholder="email@gmail.com"
          type="email"
          blurOnSubmit={false}
          returnKeyType="next"
        />
        <SecretInput
          name="password"
          label="SENHA"
          placeholder="digite sua senha"
          type="password"
        />
      </Form>
      {errorMessage !== '' && <Error>{errorMessage}</Error>}
      <Button onPress={() => formRef.current.submitForm()}>Login</Button>
    </Container>
  );
};

export default Login;

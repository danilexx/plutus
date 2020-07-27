import React, { useRef, useState } from 'react';
import Firebase from '../../../config/firebase';
import { Form } from '@unform/mobile';
import { Container, Title, Error } from '../styles';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import Input, { SimpleMaskedInput } from '../../../components/Input';

const Details = () => {
  const formRef = useRef(null);
  const phoneRef = useRef();
  const cpfRef = useRef();
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (data: any) => {
    const { cellphone, cpf, name } = data;
    try {
      const user = Firebase.auth.currentUser();
      const db = Firebase.firestore();
      db.collection('users').doc(user.uid).set({
        name: name,
        cellphone,
        cpf,
        email: user.email,
        uid: user.uid,
      });
      navigation.navigate('Home');
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
    }
  };

  return (
    <Container>
      <Title>Detalhes do Cadastro</Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Nome"
          placeholder="Nome*"
          blurOnSubmit={false}
          returnKeyType="next"
        />
        <SimpleMaskedInput
          ref={phoneRef}
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          name="phone"
          label="Telefone"
          placeholder="Telefone*"
        />
        <SimpleMaskedInput
          ref={cpfRef}
          type={'cpf'}
          label="CPF"
          name="cpf"
          placeholder="CPF*"
        />
      </Form>
      {errorMessage !== '' && <Error>{errorMessage}</Error>}
      <Button onPress={() => formRef.current.submitForm()}>Login</Button>
    </Container>
  );
};

export default Details;

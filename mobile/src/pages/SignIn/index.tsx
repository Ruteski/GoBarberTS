import React from 'react';
import { Image } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title } from './styles';

import LogoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={LogoImg} />

      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('clicou');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;

import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

import LogoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={LogoImg} />
    </Container>
  );
};

export default SignIn;

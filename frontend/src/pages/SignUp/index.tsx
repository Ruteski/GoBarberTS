import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import LogoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={LogoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu Cadastro</h1>

        <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
        <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="criar">
        <FiArrowLeft />
        Voltar para Logon
      </a>
    </Content>
  </Container>
);

export default SignUp;

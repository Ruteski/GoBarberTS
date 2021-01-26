/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import LogoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .required('O e-mail é obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'A senha deve ter no mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={LogoImg} alt="GoBarber" />

        {/* <Form initialData={{ name: 'Ruteski' }} onSubmit={handleSubmit}> */}
        <Form initialData={{ name: 'Ruteski' }} onSubmit={handleSubmit}>
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
        </Form>

        <a href="criar">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;

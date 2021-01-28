import React from 'react';

import Toast from './Toast';

import { IToastMessage } from '../../hooks/Toast';
import { Container } from './styles';

interface IToastContainerProps {
  messages: IToastMessage[];
}

const ToastContainer: React.FC<IToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => {
        return <Toast key={message.id} message={message} />;
      })}
    </Container>
  );
};

export default ToastContainer;

import styled from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  border: 2px solid ${props => (props.isFocused ? '#ff9000' : '#232129')};
  color: ${props =>
    props.isFocused || props.isFilled ? '#ff9000' : '#666360'};

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    border: 0;
    flex: 1;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

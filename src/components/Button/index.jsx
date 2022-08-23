import React from 'react';
import { StyledButton } from './styles';

export default function Button({ onClick, text, ...props }) {
  return (
    <StyledButton {...props} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

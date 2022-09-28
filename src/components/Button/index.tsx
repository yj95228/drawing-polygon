import React from 'react';
import { StyledProps, StyledButton } from './styles';

interface Props extends StyledProps {
  onClick: React.MouseEventHandler;
  text: string;
}

export default function Button({ onClick, text, ...props }: Props) {
  return (
    <StyledButton {...props} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

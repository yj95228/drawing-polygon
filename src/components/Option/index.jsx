import React from 'react';
import { StyledButton } from './styles';

export default function Option({ onClick, text, ...props }) {
  return <StyledButton {...props} onClick={onClick} >{text}</StyledButton>;
}
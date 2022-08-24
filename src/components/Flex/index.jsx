import React from 'react';
import { StyledFlex } from './styles';

export default function Flex({ children, ...props }) {
  return (
    <StyledFlex {...props}>
      {children}
    </StyledFlex>
  );
}

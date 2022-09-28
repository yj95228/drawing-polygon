import React from 'react';
import { StyledProps, StyledFlex } from './styles';

interface Props extends StyledProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Flex({ children, ...props }: Props) {
  return <StyledFlex {...props}>{children}</StyledFlex>;
}

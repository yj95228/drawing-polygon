import React from 'react';
import { Wrapper } from './styles';
import Nav from 'components/Nav';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: Props) => {
  return (
    <Wrapper direction='column' className={className}>
      <Nav />
      {children}
    </Wrapper>
  );
};

export default Layout;

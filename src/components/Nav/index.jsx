import React from 'react';
import { NavContainer, Menu } from './styles';

export default function Nav() {
  return (
    <NavContainer>
      <Menu to='/'>지도 → 폴리곤</Menu>
      <Menu to='/draw'>폴리곤 → 지도</Menu>
    </NavContainer>
  );
}

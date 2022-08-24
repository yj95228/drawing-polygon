import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  font-family: 'Fredoka', sans-serif;
  margin-top: 20px;
`;

export const Menu = styled(NavLink)`
  font-size: 18px;
  color: royalblue;
  text-decoration: none;
  border: 0;
  padding: 10px 30px;
  cursor: pointer;
  z-index: 0;
  &.active {
    font-weight: 600;
    position: relative;
    &::after {
      content: '';
      width: 100%;
      height: 6px;
      background: #e0e0ff;
      position: absolute;
      display: inline-block;
      left: 0;
      bottom: 1px;
      z-index: -1;
    }
  }
`;

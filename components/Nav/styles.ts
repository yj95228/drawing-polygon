import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  margin-top: 20px;
  list-style: none;
  a {
    text-decoration: none;
    font-size: 18px;
    color: royalblue;
  }
  li {
    float: left;
    padding: 10px 30px;
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
  }
`;

export const Menu = styled.a``;

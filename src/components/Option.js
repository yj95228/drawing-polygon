import React from 'react';
import styled from '@emotion/styled';

export default function Option({ onClick, text, ...props }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

const StyledButton = styled.button`
  border: 0;
  border-radius: 20px;
  padding: 5px 15px;
  color: royalblue;
  background-color: ${(props) => (props.target ? '#fff' : '#f6f6f6')};
  font-family: 'Fredoka', sans-serif;
  cursor: pointer;
  z-index: 0;
  &:hover {
    font-weight: 700;
  }
`;

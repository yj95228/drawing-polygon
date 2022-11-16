import styled from '@emotion/styled';

export interface StyledProps {
  isTarget?: boolean;
}
export const StyledButton = styled.button<StyledProps>`
  border: 0;
  border-radius: 20px;
  padding: 5px 15px;
  color: royalblue;
  background-color: ${(props) => (props.isTarget ? '#f6f6f6' : '#fff')};
  font-weight: ${(props) => props.isTarget && '700'};
  font-family: 'Fredoka', sans-serif;
  cursor: pointer;
  z-index: 0;
  &:hover {
    font-weight: 700;
  }
`;

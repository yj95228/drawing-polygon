import styled from '@emotion/styled';

export interface StyledProps {
  direction?: string;
  jc?: string;
  ai?: string;
}
export const StyledFlex = styled.div<StyledProps>`
  display: flex;
  flex-direction: ${(props) => props.direction ?? 'row'};
  justify-content: ${(props) => props.jc ?? 'center'};
  align-items: ${(props) => props.ai ?? 'center'};
`;

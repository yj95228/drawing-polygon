import styled from '@emotion/styled';

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction ?? 'row'};
  justify-content: ${(props) => props.jc ?? 'center'};
  align-items: ${(props) => props.ai ?? 'center'};
`;

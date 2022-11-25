import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import Flex from 'components/Flex';

export interface Props {
  onClick: Dispatch<SetStateAction<boolean>>;
}
export interface StopEvent {
  onClick: (e: React.SyntheticEvent) => void;
}
export const ModalWrapper = styled(Flex)<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;
export const ModalContent = styled(Flex)<StopEvent>`
  background: #fff;
  padding: 30px;
  border-radius: 2rem;
  h1 {
    width: 100%;
    text-align: left;
    font-size: 24px;
    margin-bottom: 30px;
  }
  p {
    width: 100%;
    text-align: left;
  }
  input {
    width: 250px;
    height: 2rem;
    margin-bottom: 20px;
  }
  button {
    margin: 10px;
  }
`;

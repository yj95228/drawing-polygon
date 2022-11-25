import React, { SetStateAction, Dispatch } from 'react';
import { ModalWrapper, ModalContent } from './styles';

interface Props {
  children: React.ReactNode;
  onModalClick: Dispatch<SetStateAction<boolean>>;
}
const Modal = ({ children, onModalClick }: Props) => {
  return (
    <ModalWrapper onClick={onModalClick}>
      <ModalContent
        direction='column'
        onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
      >
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};
export default Modal;

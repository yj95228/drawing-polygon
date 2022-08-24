import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Flex from '../../components/Flex';

const fadeout = keyframes`
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-10px);
    opacity: 0;
  }
`;

export const Wrapper = styled(Flex)`
  .input-wrapper {
    width: 100%;
    margin: 36px 0 10px 0;
  }
  textarea {
    display: inline;
    font-family: 'Fredoka', sans-serif;
    width: 100%;
    height: 100px;
    margin-right: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f8f8f8;
    resize: none;
    word-wrap: break-word;
    word-break: break-word;
  }
  textarea:focus {
    outline: none;
  }
  .toastpopup {
    position: absolute;
    padding: 11px;
    min-width: 200px;
    text-align: center;
    animation: ${fadeout} 3s ease-out;
    z-index: 999;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    border-radius: 4px;
  }
`;

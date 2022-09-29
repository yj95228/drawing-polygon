import styled from '@emotion/styled';
import Flex from 'components/Flex';

export const Wrapper = styled(Flex)`
  .option-wrapper {
    width: 100%;
  }
  form {
    display: flex;
    width: 100%;
    margin: 10px;
    justify-content: space-between;
    align-items: center;
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
`;

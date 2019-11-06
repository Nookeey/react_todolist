import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ececec;
  height: 40px;
  padding: 4px 15px;
  margin: 0;
  width: 100%;
  background-color: transparent;

  &:active,
  &:focus {
    outline: none
  }
`;

export default Input;
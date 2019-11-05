import styled from 'styled-components';

const TodoItem = styled.div`
  display: block;
  width: 100%;
  padding: 15px;
  margin: 6px 0;
  background-color: white;
  color: black;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

export default TodoItem;
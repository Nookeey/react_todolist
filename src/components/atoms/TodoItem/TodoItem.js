import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
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

const TodoItem = ({ content }) => (
  <StyledWrapper>
    { content }
  </StyledWrapper>
);

TodoItem.propTypes = {
  content: PropTypes.string.isRequired
}

export default TodoItem;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TodoItem from 'components/atoms/TodoItem/TodoItem';

const bgColors = {
  'Pending': '#0091EA',
  'In Progress': '#FFD600',
  'Completed': '#00C853'
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${({ cardType }) => (cardType && bgColors[cardType])};
  padding: 15px;
`;

const StyledTitle = styled.h1`
  margin: 0 0 10px;
  padding: 0;
  color: white;
  font-size: 20px;
  text-align: left;
  font-weight: 600;
`;

const TodoCard = ({ cardType, todo }) => (
  <StyledWrapper cardType={cardType}>
    <StyledTitle>
      {cardType}
    </StyledTitle>
    {todo.map(({ id, content }) => (
      <TodoItem 
        content={content}
        key={id}
      />
    ))}
  </StyledWrapper>
)

TodoCard.propTypes = {
  cardType: PropTypes.string.isRequired,
  todo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
}

export default TodoCard;
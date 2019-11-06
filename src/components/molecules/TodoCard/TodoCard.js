import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TodoItem from 'components/atoms/TodoItem/TodoItem';
import AddTodo from 'components/molecules/AddTodo/AddTodo';

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
  /* background-color: #eee; */
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

class TodoCard extends Component {
  handelTodoItemClick = (id, projectId, status) => {
    const { handelTodoCardChildClick } = this.props
    handelTodoCardChildClick(id, projectId, status);
  }

  render() {
    const { cardType, todo, projectId } = this.props;

    return (  
      <StyledWrapper cardType={cardType}>
        <StyledTitle>
          {cardType}
        </StyledTitle>
        {todo.map(({ id, content, status }) => (
          <TodoItem onClick={() => this.handelTodoItemClick(id, projectId, status)} key={id}>{content}</TodoItem>
        ))}
        { cardType === 'Pending' && ( <AddTodo projectId={projectId}/> ) }
      </StyledWrapper>
    )
  }
}

TodoCard.propTypes = {
  cardType: PropTypes.string.isRequired,
  todo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    projectId: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired
  })),
  handelTodoCardChildClick: PropTypes.func.isRequired,
  projectId: PropTypes.number.isRequired
}

TodoCard.defaultProps = {
  todo: [],
};

const mapStateToProps = (state, ownProps) =>  ({
  todo: state.todos.filter(item => (item.projectId === parseInt(ownProps.projectId, 10) && item.status === ownProps.cardType))
});

export default connect(mapStateToProps)(TodoCard);
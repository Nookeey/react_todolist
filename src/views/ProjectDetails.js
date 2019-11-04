import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import TodoCard from 'components/molecules/TodoCard/TodoCard'

const StyledWrapper = styled.div`

`;

const StyledProjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledTodosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
`;

class ProjectDetails extends Component {
  state = {
    activeItem: {
      id: '',
      name: '',
      status: ''
    },
    todosPending: [],
    todosCompleted: [],
    todosInProgress: []
  }

  componentDidMount() {
    const { activeItem, todos } = this.props 
    if (activeItem) {
      const activeItemO = activeItem;
      this.setState({ activeItem: activeItemO });
    }
    if (todos) {
      const todosPending = todos.filter(item => item.status === 'Pending')
      const todosCompleted = todos.filter(item => item.status === 'Completed')
      const todosInProgress = todos.filter(item => item.status === 'In Progress')
      this.setState({ todosPending, todosCompleted, todosInProgress })
    }
  }

  render() {
    const { activeItem, todosPending, todosCompleted, todosInProgress } = this.state
    
    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledProjectInfo>
            <div>{ activeItem.id }</div>
            <div>{ activeItem.name }</div>
            <div>{ activeItem.status ? 'true' : 'false' }</div>
          </StyledProjectInfo>
          <StyledTodosWrapper>
            <TodoCard cardType="Pending" todo={todosPending} />
            <TodoCard cardType="In Progress" todo={todosInProgress} />
            <TodoCard cardType="Completed" todo={todosCompleted} />
          </StyledTodosWrapper>
        </StyledWrapper>
      </UserPageTemplate>
    )
  }
}

ProjectDetails.propTypes = {
  activeItem: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  })).isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    projectId: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  activeItem: state.projects.filter(item => item.id === parseInt(ownProps.match.params.id, 10)),
  todos: state.todos.filter(item => item.projectId === parseInt(ownProps.match.params.id, 10))
});

export default connect(mapStateToProps)(ProjectDetails);

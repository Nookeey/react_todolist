import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import TodoCard from 'components/molecules/TodoCard/TodoCard'
import { changeTodoItemStatus as changeTodoItemStatusAction } from 'actions';

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
    todo: []
  }

  componentDidMount() {
    const { activeItem, todo } = this.props 
    if (activeItem) {
      this.setState({ activeItem });
    }
    if (todo) { 
      this.setState({todo})
    }
  }

  handelTodoCardChildData = (id, projectId, status) => {
    const { changeTodoItemStatus } = this.props
    changeTodoItemStatus(id, projectId, status)
  }

  render() {
    const { activeItem, todo } = this.state
    const todosPending = todo.filter(item => item.status === 'Pending')
    const todosInProgress = todo.filter(item => item.status === 'In Progress')
    const todosCompleted = todo.filter(item => item.status === 'Completed')
    
    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledProjectInfo>
            <div>{ activeItem.id }</div>
            <div>{ activeItem.name }</div>
            <div>{ activeItem.status ? 'true' : 'false' }</div>
          </StyledProjectInfo>
          <StyledTodosWrapper>
            <TodoCard cardType="Pending" todo={todosPending} handelTodoCardChildClick={this.handelTodoCardChildData} />
            <TodoCard cardType="In Progress" todo={todosInProgress} handelTodoCardChildClick={this.handelTodoCardChildData} />
            <TodoCard cardType="Completed" todo={todosCompleted} handelTodoCardChildClick={this.handelTodoCardChildData} />
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
  todo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    projectId: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  changeTodoItemStatus: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  activeItem: state.projects.filter(item => item.id === parseInt(ownProps.match.params.id, 10)),
  todo: state.todos.filter(item => item.projectId === parseInt(ownProps.match.params.id, 10))
});

const mapDispatchToProps = (dispatch) => ({
  changeTodoItemStatus: (id, status, projectId) => dispatch(changeTodoItemStatusAction(id, status, projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);

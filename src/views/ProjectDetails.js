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
  justify-content: space-between;
`;

const StyledTodosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
`;

class ProjectDetails extends Component {
  state = {
    activeItem: {
      id: 100,
      name: 'dasdas',
      status: false
    }
  }

  componentDidMount() {
    const { activeItem } = this.props 
    if (activeItem) {
      this.setState({ activeItem: activeItem[0] });
    }
  }

  handelTodoCardChildData = (id, projectId, status) => {
    const { changeTodoItemStatus } = this.props
    changeTodoItemStatus(id, projectId, status)
  }

  render() {
    const { activeItem } = this.state

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledProjectInfo>
            <div>id: { activeItem.id }</div>
            <div>name: { activeItem.name }</div>
            <div>status: { activeItem.status ? 'true' : 'false' }</div>
          </StyledProjectInfo>
          <StyledTodosWrapper>
            <TodoCard cardType="Pending" projectId={activeItem.id} handelTodoCardChildClick={this.handelTodoCardChildData} />
            <TodoCard cardType="In Progress" projectId={activeItem.id} handelTodoCardChildClick={this.handelTodoCardChildData} />
            <TodoCard cardType="Completed" projectId={activeItem.id} handelTodoCardChildClick={this.handelTodoCardChildData} />
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
  changeTodoItemStatus: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  activeItem: state.projects.filter(item => item.id === parseInt(ownProps.match.params.id, 10)),
});

const mapDispatchToProps = (dispatch) => ({
  changeTodoItemStatus: (id, status, projectId) => dispatch(changeTodoItemStatusAction(id, status, projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
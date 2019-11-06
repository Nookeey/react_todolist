import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { connect } from 'react-redux';
import { addTodo as addTodoAction } from 'actions'
import addIcon from 'assets/icons/add_white.svg';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-column-gap: 15px;
  width: 100%;
  margin: 20px 0 0;
`;

const StyledInput = styled(Input)`
  height: 40px;
  color: white;
  border-bottom: 1px solid #40C4FF;
`;

class AddTodo extends Component {
  state = {
    content: ''
  }

  handleOnChange = (content) => {
    this.setState({ content })
  }

  handelOnClickButton = () => {
    const { addTodo, projectId } = this.props;
    const { content } = this.state;
    addTodo(content, projectId)
    this.setState({ content: '' })
  }

  render() {
    const { content } = this.state
    return (
      <StyledWrapper>
        <StyledInput onChange={e => this.handleOnChange(e.target.value)} value={content}/>
        <ButtonIcon onClick={this.handelOnClickButton} icon={addIcon}/>
      </StyledWrapper>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  projectId: PropTypes.number.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (content, projectId) => dispatch(addTodoAction(content, projectId))
})
 
export default connect(null, mapDispatchToProps)(AddTodo);
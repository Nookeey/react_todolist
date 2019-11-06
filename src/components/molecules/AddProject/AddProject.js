import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { connect } from 'react-redux';
import { addProject as addProjectAction } from 'actions'
import addIcon from 'assets/icons/add_white.svg';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-column-gap: 15px;
  padding: 0 0 15px;
`;

class AddProject extends Component {
  state = {
    name: ''
  }

  handleOnChange = (name) => {
    this.setState({ name })
  }

  handelOnClickButton = () => {
    const { addProject } = this.props;
    const { name } = this.state;
    addProject(name)
    this.setState({ name: '' })
  }

  render() {
    const { name } = this.state
    return (
      <StyledWrapper>
        <Input onChange={e => this.handleOnChange(e.target.value)} value={name}/>
        <ButtonIcon onClick={this.handelOnClickButton} icon={addIcon}/>
      </StyledWrapper>
    )
  }
}

AddProject.propTypes = {
  addProject: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  addProject: (name) => dispatch(addProjectAction(name))
})
 
export default connect(null, mapDispatchToProps)(AddProject);
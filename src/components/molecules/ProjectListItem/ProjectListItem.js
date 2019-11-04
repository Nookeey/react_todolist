import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeItem as removeItemAction, getItemById as getItemByIdAction } from 'actions';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 100px 100px;
  align-items: center;
  grid-column-gap: 15px;
  padding: 20px 15px;
  margin: 4px 0;
  border-left: 5px solid ${({ status }) => (status === false ? '#FF3D00' : '#AEEA00')};
  background-color: #FAFAFA;

  &:hover {
    background-color: #F9FBE7;
    cursor: pointer;
  }
`;

const StyledId = styled.div`
  text-align: center;
`;

const StyledName = styled.div`
`;

const StyledStatus = styled.div`
  text-align: right;
`;

const StyledActions = styled.div`

`;

const StyledActionButton = styled.button`
  width: 20px;
  border: none;
  color: white;
  background-color: #40C4FF;
  text-align: center;

  &:hover { 
    cursor: pointer;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class ProjectListItem extends Component {
  state = {
    redirect: false,
  };

  handleProjectListItemClick = () => this.setState({ redirect: true });

  render() {
    const { id, name, status, removeItem, getItemById } = this.props;
    const { redirect } = this.state;
    
    if (redirect) {
      return <Redirect to={`projects/details/${id}`} />;
    }

    return (
      <StyledWrapper status={status}>
        <StyledId onClick={() => getItemById(id)}>
          {id}
        </StyledId>
        <StyledName onClick={this.handleProjectListItemClick}>
          {name}
        </StyledName>
        <StyledStatus>
          {status}
        </StyledStatus>
        <StyledActions>
          <StyledActionButton onClick={() => removeItem(id)}>D</StyledActionButton>
        </StyledActions>
      </StyledWrapper>
    );
  }

}

ProjectListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  removeItem: PropTypes.func.isRequired,
  getItemById: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  getItemById: (id) => dispatch(getItemByIdAction(id))
})

export default connect(null, mapDispatchToProps)(ProjectListItem);

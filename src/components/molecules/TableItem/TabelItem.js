import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 100px;
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

// eslint-disable-next-line react/prefer-stateless-function
class TableItem extends Component {
  state = {
    redirect: false,
  };

  handleTableItemClick = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      name,
      status
    } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`projects/details/${id}`} />;
    }

    return (
      <StyledWrapper onClick={this.handleTableItemClick} status={status}>
        <StyledId>
          {id}
        </StyledId>
        <StyledName>
          {name}
        </StyledName>
        <StyledStatus>
          {status}
        </StyledStatus>
      </StyledWrapper>
    );
  }

}

TableItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
}

export default TableItem;
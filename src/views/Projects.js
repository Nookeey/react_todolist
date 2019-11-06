/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import ProjectsList from '../components/organisms/ProjectsList/ProjectsList';
import AddProject from '../components/molecules/AddProject/AddProject';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledButton = styled.button`
  border: none;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  background-color: #40C4FF;
  color: white;
  margin-right: 15px;

  &:hover {
    background-color: #80D8FF;
  }
`;

const Projects = ({ projects }) => (
  <UserPageTemplate>
    <AddProject />
    <StyledWrapper>
      <StyledButton>
        All
      </StyledButton>
      <StyledButton>
        Completed
      </StyledButton>
      <StyledButton>
        In Progress
      </StyledButton>
    </StyledWrapper>
    <ProjectsList projects={projects} />
  </UserPageTemplate>
)

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  }))
}

Projects.defaultProps = {
  projects: [],
};

const mapStateToProps = ({ projects }) => ({ projects })

export default connect(mapStateToProps)(Projects)

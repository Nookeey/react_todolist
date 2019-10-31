/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import ProjectsList from '../components/organisms/ProjectsList/ProjectsList';

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

const mapStateToProps = state => {
  const { projects } = state;
  return { projects }
}

export default connect(mapStateToProps)(Projects)

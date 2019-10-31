import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonSidebar from 'components/atoms/ButtonSidebar/ButtonSidebar';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  padding: 25px 0;
  width: 220px;
  height: 100vh;
  background-color: #263238;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SideBar = () => (
  <StyledWrapper>
    <ButtonSidebar as={NavLink} to="/">Projects</ButtonSidebar>
    <ButtonSidebar as={NavLink} to="/test">Test</ButtonSidebar>
  </StyledWrapper>
)

export default SideBar;
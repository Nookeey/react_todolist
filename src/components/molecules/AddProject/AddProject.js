import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input'

const StyledWrapper = styled.div`
  display: flex;
  padding: 0 0 15px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 100%;
  font-weight: 600;
  background-color: #40C4FF;
  color: white;
  font-size: 20px;

  &:hover {
    background-color: #80D8FF;
  }
`;

const StyledInput = styled(Input)`
  margin: 0 15px 0 0;
`;

const AddProject = () => (
  <StyledWrapper>
    <StyledInput />
    <StyledButton>+</StyledButton>
  </StyledWrapper>
)

export default AddProject;
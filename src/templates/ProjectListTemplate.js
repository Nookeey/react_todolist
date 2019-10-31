import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
`;

const ProjectListTemaplte = ({ children }) => (
  <StyledWrapper>
    {children}
  </StyledWrapper>
);

ProjectListTemaplte.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired
}

export default ProjectListTemaplte;
import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 25px;
`;

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    <StyledWrapper>
      {children}
    </StyledWrapper>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;

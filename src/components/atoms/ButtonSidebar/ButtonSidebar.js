import styled from 'styled-components';

const ButtonSidebar = styled.button`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  color: #ffffff;
  text-decoration: none;
  background-color: transparent;
  width: 220px;
  height: 50px;
  padding: 0 15px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-top: 1px solid #37474F;
  line-height: 50px;

  &:hover { 
    cursor: pointer;
    background-color: #37474F;
  }

  &:last-child {
    border-bottom: 1px solid #37474F;
  }
`;

export default ButtonSidebar;
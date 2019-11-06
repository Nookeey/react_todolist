import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 100%;
  background: #40C4FF url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  color: white;

  &:hover {
    background-color: #80D8FF;
    cursor: pointer;
  }
`;

export default ButtonIcon;
import styled from 'styled-components';

export const ScrollToTopStyle = styled.button`
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 10;
  border: none;
  outline: none;
  color: ${props => props.theme.colors.white};
  background-image: linear-gradient(to right, #e052a0, #e35345) !important;
  cursor: pointer;
  padding: 18px;
  border-radius: 50%;
  font-size: 18px;
  line-height: 0;
  height: 64px;
  width: 64px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    color: ${props => `${props.theme.colors.pink}`};
    box-shadow: none;
    background-image: none !important;
    background-color: #e052a0;
  }
`;

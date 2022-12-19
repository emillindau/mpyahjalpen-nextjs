import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  /* background-color: ${props => props.theme.colors.pink}; */
  background-image: linear-gradient(to right, #e052a0, #e35345) !important;

  border-radius: 3px;
  padding: 16px 18px 15px;
  white-space: nowrap;
  margin: 1em;

  :hover {
    /* background-color: ${props => `${props.theme.colors.pink}50`}; */
    background-color: #e052a0;
    background-image: none !important;
  }
`;

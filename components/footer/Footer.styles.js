import styled from 'styled-components';

export const FooterStyle = styled.footer`
  width: 100%;
  height: auto;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
  margin-top: 7em;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  @media all and (display-mode: fullscreen) {
    display: none;
  }
`;

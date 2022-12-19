import styled from 'styled-components';

export const LayoutStyle = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: grid;
  grid-template-columns: 1fr 9fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media all and (display-mode: fullscreen) {
    grid-template-columns: 1fr;
  }

  main {
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  footer {
    grid-column-start: 2;

    @media (max-width: 768px) {
      grid-column-start: 1;
    }
  }
`;

export const MainContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;

  @media (max-width: 768px) {
    gap: 0;
    grid-template-columns: 1fr;
  }
`;

export const SideBar = styled.div`
  @media all and (display-mode: fullscreen) {
    display: none;
  }
`;

export const QRCodeWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(150px + 1em);
  padding: 1em;
`;

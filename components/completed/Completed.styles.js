import styled from 'styled-components';

export const CompletedHighlight = styled.div`
  background-color: ${props => props.theme.colors.pink};
  padding: 0.1em;
  margin-top: 2em;
`;

export const CompletedHeader = styled.h1`
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  animation: blinker 2s linear infinite;
  font-size: 3em;
  color: ${props => props.theme.colors.white};
  text-align: center;
`;

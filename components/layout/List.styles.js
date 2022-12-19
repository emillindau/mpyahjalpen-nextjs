import styled, { css } from 'styled-components';

export const PageListWrapper = styled.div`
  display: grid;
  padding: 2em;
  margin-top: 2em;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 2em;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  @keyframes glowing {
    from {
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
    to {
      box-shadow: 0 0 5px whitesmoke, 0 0 7px #e34586, 0 0 9px #e34586,
        0 0 11px #e34586, 0 0 13px #e34586, 0 0 15px #e34586, 0 0 17px #e34586;
    }
  }

  ${props =>
    props.glow &&
    css`
      animation: glowing 1.5s ease-in-out 4 alternate;
    `}
`;

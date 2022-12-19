import styled from 'styled-components';

export const NavContainer = styled.div`
  position: relative;
  text-align: right;
`;

export const NavContent = styled.ul`
  left: 0;
  padding: 1em;
  text-transform: uppercase;
  list-style-type: none;
  max-width: 192px;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    justify-content: center;
    gap: 1em;
    max-width: 300px;
  }
`;

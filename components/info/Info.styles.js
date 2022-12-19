import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

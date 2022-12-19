import styled from 'styled-components';

export const StatsCard = styled.div`
  border-radius: 4px;
  color: ${props => props.theme.colors.black};
  padding: 20px;
  /* font-family: 'Merriweather', serif; */
  margin-bottom: 20px;

  hr {
    border-top: 1px solid ${props => props.theme.colors.darkBrown};
  }
`;

export const Highlight = styled.span`
  color: ${props => props.theme.colors.pink};
  border-bottom: 2px solid currentColor;
`;

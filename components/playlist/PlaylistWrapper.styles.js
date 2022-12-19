import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 2em;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const PlaylistWrapperStyled = styled.div`
  background-color: ${props => props.theme.colors.white};
  font-family: 'Merriweather', serif;
  line-height: 2em;
  font-size: 1.2em;
  padding: 2em;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1em;
  }
`;

export const PlaylistUL = styled.ul`
  text-align: left;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0.8rem;
  }
`;

export const InfoPlaylist = styled.div`
  width: 100%;
  padding: 2em;
`;

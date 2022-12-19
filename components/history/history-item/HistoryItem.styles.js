import styled, { css } from 'styled-components';
import { ListItem } from '../../layout/List.styles';

export const HistoryItemStyle = styled.div`
  padding: 2em;
  margin: 2em;
  background-color: ${props => props.theme.colors.white};
  font-family: 'Merriweather', serif;
  line-height: 2em;
  font-size: 1.2em;
`;

export const StyledListItem = styled(ListItem)`
  background-color: ${props => props.theme.colors.brown};

  ${props =>
    props.hasLink &&
    css`
      &:hover {
        cursor: ${props => (props.url !== '' ? 'pointer' : 'default')};
        transform: ${props => (props.url !== '' ? 'scale(1.05)' : 'none')};
      }
    `}
`;

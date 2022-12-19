import styled, { css } from 'styled-components';
import { ListItem } from '../../layout/List.styles';

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const RemovedByText = styled.span`
  font-size: 0.8rem;
  font-style: italic;
`;

export const RemovedByHighlight = styled.span`
  text-decoration: ${props => props.theme.colors.green} wavy underline;
`;

export const SongTitle = styled.p`
  margin: 0;

  ${props =>
    props.removed &&
    css`
      text-decoration: line-through;
      color: gray;
    `}
`;

export const RemoveCard = styled(ListItem)`
  position: absolute;
  padding: 1em;
  border-radius: 4px;
  color: #fff;
  background-color: ${props => props.theme.colors.green};

  ::before {
    content: '';
    position: absolute;
    border-bottom: 10px solid ${props => props.theme.colors.green};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    z-index: 10;

    top: -10px;
    left: calc(50% - 7px);
  }
`;

export const StyledButton = styled.button`
  display: inline-block;
  margin-left: 10px;
  outline: 0;
  border: 0;
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  background-image: linear-gradient(to right, #e052a0, #e35345) !important;
  border-radius: 3px;
  white-space: nowrap;
  min-width: 22px;

  :hover {
    background-color: #e052a0;
    background-image: none !important;
  }
`;

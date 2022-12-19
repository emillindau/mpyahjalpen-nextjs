import styled from 'styled-components';
import { ListItem } from '../layout/List.styles';

export const StyledCard = styled(ListItem)`
  transition: 0.3s transform;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  text-align: left;

  &:hover {
    cursor: ${props => (props.url !== '' ? 'pointer' : 'default')};
    transform: ${props => (props.url !== '' ? 'scale(1.02)' : 'none')};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const CardTitle = styled.div``;

export const CardContent = styled.div``;

import styled from 'styled-components';
import { ListItem } from '../layout/List.styles';

export const AuctionCardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  text-align: left;
`;

export const ImageWrapper = styled.div`
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
`;

export const InfoAuction = styled.div`
  padding: 2em;
  margin-top: 2em;
  width: 100%;
`;

export const AuctionItem = styled(ListItem)`
  transition: 0.3s transform;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

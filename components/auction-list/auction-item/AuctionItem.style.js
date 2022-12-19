import styled, { css } from 'styled-components';

export const AuctionItemStyle = styled.div`
  padding: 2em;
  margin: 2em;
  background-color: ${props => props.theme.colors.white};
  font-family: 'Merriweather', serif;
  line-height: 2em;
  font-size: 1.2em;
  width: 100%;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
`;

export const BidHistoryStyle = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const BidHistoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BidHistoryItemStyle = styled.div`
  background-color: ${props => props.theme.colors.brown};
  padding: 2em;
  border-radius: 4px;

  ${props =>
    props.isHighest &&
    css`
      border: 1px solid ${props.theme.colors.pink};
    `}
`;

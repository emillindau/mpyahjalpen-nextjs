import { Highlight } from '../../stats/Stats.styles';
import { BidHistoryItemStyle } from './AuctionItem.style';

interface BidHistoryItem {
  bids: number;
  amount: number;
  name: string;
  isHighest: boolean;
}

export const BidHistoryItem = ({
  amount,
  bids,
  name,
  isHighest,
}: BidHistoryItem) => {
  return (
    <BidHistoryItemStyle isHighest={isHighest}>
      <h2>{name}</h2>
      <h3>
        <Highlight>{amount} SEK</Highlight>
      </h3>
      <p>
        {bids} bid{bids === 1 ? '' : 's'}
      </p>
    </BidHistoryItemStyle>
  );
};

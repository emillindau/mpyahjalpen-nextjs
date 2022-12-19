import Image from 'next/legacy/image';
import type { Auction } from '../../../lib/types/gift.types';
import { Highlight } from '../../stats/Stats.styles';
import { ImageWrapper } from '../Auction.style';
import {
  AuctionItemStyle,
  BidHistoryStyle,
  BidHistoryWrapper,
} from './AuctionItem.style';
import { BidHistoryItem } from './BidHistoryItem';

export const AuctionItem = ({ bidders, gift }: Auction) => {
  const data = bidders ?? {};
  const sortedBidders = Object.values(data).sort((a, b) =>
    a.amount > b.amount ? -1 : 1
  );

  return (
    <AuctionItemStyle>
      <div>
        <ImageWrapper>
          <Image
            priority
            src={gift.image}
            height={500}
            width={500}
            alt={gift.key}
          />
        </ImageWrapper>
      </div>
      <div>
        <h1>{gift.title}</h1>
        <h3>{gift.description}</h3>
        <p>
          Original cost: <Highlight>{gift.lowestCost} SEK</Highlight>
        </p>
      </div>
      <BidHistoryStyle>
        <h2>Bid history</h2>
        <BidHistoryWrapper>
          {sortedBidders.map((bidder, i) => (
            <BidHistoryItem key={bidder.name} {...bidder} isHighest={i === 0} />
          ))}
        </BidHistoryWrapper>
      </BidHistoryStyle>
    </AuctionItemStyle>
  );
};

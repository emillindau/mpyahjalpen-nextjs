import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { Highlight } from '../stats/Stats.styles';
import { AuctionCardStyled, AuctionItem, ImageWrapper } from './Auction.style';
import type { Gift, Bidder } from '../../lib/types/gift.types';
import type { Donation } from '../../lib/types/donations.types';

const HighestBidder = ({ bid }: { bid: Donation & { bids: number } }) => {
  return (
    <div>
      <h2>Highest bidder:</h2>
      <h3>
        {bid.name} <Highlight>{bid.amount} SEK</Highlight> 🎉
      </h3>
    </div>
  );
};

interface AuctionCardProps {
  gift: Gift;
  bidders: Bidder;
}

export const AuctionCard = ({ gift, bidders = {} }: AuctionCardProps) => {
  const router = useRouter();
  const [highest] =
    Object.values(bidders)?.sort?.((a, b) => (a.amount > b.amount ? -1 : 1)) ??
    [];

  return (
    <AuctionItem
      onClick={() => {
        router.push(`/auctions/${gift.key}`);
      }}
    >
      <AuctionCardStyled>
        <ImageWrapper>
          <Image
            priority
            src={gift.image}
            height={500}
            width={500}
            alt={gift.key}
          />
        </ImageWrapper>
        <div>
          <h2>{gift.title}</h2>
          <h3>{gift.description}</h3>
          <p>
            Original cost: <Highlight>{gift.lowestCost} SEK</Highlight>
          </p>
          {highest && (
            <>
              <hr />
              <HighestBidder bid={highest} />
            </>
          )}
          <p>
            Bids: <Highlight>{Object.keys(bidders).length}</Highlight>
          </p>
        </div>
      </AuctionCardStyled>
    </AuctionItem>
  );
};

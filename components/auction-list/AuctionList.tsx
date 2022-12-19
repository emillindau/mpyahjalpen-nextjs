import Link from 'next/link';
import type { Auctions } from '../../lib/types/gift.types';
import { PageListWrapper } from '../layout/List.styles';
import { Highlight } from '../stats/Stats.styles';
import { InfoAuction } from './Auction.style';
import { AuctionCard } from './AuctionCard';

export const AuctionList = ({ bidders, gifts }: Auctions) => {
  return (
    <div>
      <PageListWrapper>
        {gifts.map(g => (
          <AuctionCard key={g.key} gift={g} bidders={bidders[g.key]} />
        ))}
      </PageListWrapper>
      <InfoAuction>
        <h2>How to bid on an auction</h2>
        <p>
          1. Go to our{' '}
          <Link href="https://bossan.musikhjalpen.se/mpyahjaelpen">Bössa</Link>
        </p>
        <p>
          2. <Highlight>Check</Highlight> &ldquo;Visa upp mitt bidrag och
          eventuellt meddelande på insamlingen&rdquo;
        </p>
        <p>
          3. Fill in your <Highlight>name</Highlight>, remember this! And use
          the same name in continuous bids
        </p>
        <p>
          4. Mark your message with the gift number, eg.{' '}
          <Highlight>&ldquo;gift1&rdquo;</Highlight>
        </p>
      </InfoAuction>
    </div>
  );
};

import { Jar } from '../../lib/types/jar.types';
import { StatsCard, Highlight } from './Stats.styles';

type StatsProps = Pick<Jar, 'amount' | 'prevAmount' | 'noOfDonations'>;

export const Stats = ({ amount, prevAmount, noOfDonations }: StatsProps) => {
  return (
    <StatsCard>
      <h1>
        So far we&apos;ve collected <Highlight>{amount} SEK</Highlight>
      </h1>
      <h2>
        Last donation was{' '}
        <Highlight>{prevAmount ? `${prevAmount} SEK` : 'hidden'}</Highlight>
      </h2>
      <h3>
        And that makes it <Highlight>{noOfDonations}</Highlight> donations in
        total. Great job!
      </h3>
    </StatsCard>
  );
};

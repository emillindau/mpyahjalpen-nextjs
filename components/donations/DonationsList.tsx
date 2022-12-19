import type { DonationsProps } from '../../pages/donations';
import { PageListWrapper } from '../layout/List.styles';
import { DonationCard } from './DonationCard';

export const DonationsList = ({ donations }: DonationsProps) => {
  return (
    <PageListWrapper>
      {donations.map((d, i) => (
        <DonationCard donation={d} index={i} key={d.timestamp} />
      ))}
    </PageListWrapper>
  );
};

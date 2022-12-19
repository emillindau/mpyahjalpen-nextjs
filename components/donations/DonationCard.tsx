import Image from 'next/legacy/image';
import type { Donation } from '../../lib/types/donations.types';
import { ListItem } from '../layout/List.styles';
import { Highlight } from '../stats/Stats.styles';
import { StickerWinnerWrapper } from './Donations.styles';

function getHeartColor(i: number) {
  if (i % 3 === 0) return 'yellow';
  if (i % 2 === 0) return 'pink';
  if (i % 1 === 0) return 'green';
  return 'green';
}

interface DonationCardProps {
  donation: Donation;
  index: number;
}

const StickerWinner = () => {
  return (
    <div style={{ position: 'relative' }}>
      <StickerWinnerWrapper>
        <Image
          priority
          src="/images/sticker-winner.png"
          height={36}
          width={45}
          alt="logo"
        />
      </StickerWinnerWrapper>
    </div>
  );
};

export const DonationCard = ({ donation, index }: DonationCardProps) => {
  const { amount, public: visible, name, message, raffle } = donation;
  const imageColor = getHeartColor(index + 1);
  const hasWonRaffle = raffle?.winner;

  return (
    <ListItem glow={hasWonRaffle}>
      <Image
        priority
        src={`/images/heart-${imageColor}.png`}
        height={42}
        width={42}
        alt="logo"
      />
      {hasWonRaffle && <StickerWinner />}
      <h3>
        {visible ? `${name} ` : `A secret mpyan `} gave{' '}
        <Highlight>{!amount ? '?' : amount} SEK</Highlight>
      </h3>
      {visible && message && <p>{message}</p>}
    </ListItem>
  );
};

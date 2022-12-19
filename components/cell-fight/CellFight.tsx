import Link from 'next/link';
import type { CellResults } from '../../lib/types/cell.types';

import { Highlight } from '../stats/Stats.styles';
import {
  ContentWrapper,
  InfoTextWrapper,
  TextWrapper,
  Cell1Info,
  Cell2Info,
  VersusText,
} from './CellFight.styles';
import CellProgressBar from './CellProgressbar';

const calculate = ({ cell1, cell2 }: CellResults) => {
  const { amount: c1Amount, donations: c1Donations } = cell1;
  const { amount: c2Amount, donations: c2Donations } = cell2;
  const total = c1Amount + c2Amount;
  const cell1Progress = Math.min((c1Amount / total) * 100, 100);
  const cell2Progress = Math.min((c2Amount / total) * 100, 100);

  const c1RemVal = 1 + (3 - 1) * (c1Amount / total);
  const c2RemVal = 1 + (3 - 1) * (c2Amount / total);

  return [
    cell1Progress,
    cell2Progress,
    c1Donations,
    c2Donations,
    c1RemVal.toFixed(2),
    c2RemVal.toFixed(2),
  ] as const;
};

export const CellFight = ({ cell1, cell2 }: CellResults) => {
  const [c1p, c2p, c1d, c2d] = calculate({ cell1, cell2 });

  return (
    <ContentWrapper>
      <CellProgressBar
        c1p={c1p}
        c2p={c2p}
        c1d={c1d}
        c2d={c2d}
        c1am={cell1.amount}
        c2am={cell2.amount}
      />

      <TextWrapper>
        <Cell1Info>
          <p>{c1p.toFixed(2)}%</p>
          <p>{c1d} donations</p>
          <p>{cell1.amount} SEK</p>
        </Cell1Info>
        <VersusText></VersusText>
        <Cell2Info>
          <p>{c2p.toFixed(2)}%</p>
          <p>{c2d} donations</p>
          <p>{cell2.amount} SEK</p>
        </Cell2Info>
      </TextWrapper>

      <InfoTextWrapper>
        <p>
          1. Go to our{' '}
          <Link href="https://bossan.musikhjalpen.se/mpyahjaelpen">Bössa</Link>
        </p>
        <p>
          2. <Highlight>Check</Highlight> &ldquo;Visa upp mitt bidrag och
          eventuellt meddelande på insamlingen&rdquo;
        </p>
        <p>
          3. Mark your message with <Highlight>&ldquo;cell1&rdquo;</Highlight>{' '}
          or <Highlight>&ldquo;cell2&rdquo;</Highlight>. This can be combined
          with wishing for a song or bidding on a gift.
        </p>
      </InfoTextWrapper>
    </ContentWrapper>
  );
};

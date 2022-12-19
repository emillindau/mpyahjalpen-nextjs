import { getDonations } from './donations';
import type { CellResults } from './types/cell.types';

const cell1Key = 'cell1';
const cell2Key = 'cell2';

export async function getCellData(): Promise<CellResults> {
  const donations = await getDonations();

  const cells = donations.reduce(
    (acc, curr) => {
      const message =
        curr?.message?.toLocaleLowerCase?.().replace(/\s/g, '') ?? '';

      if (message.includes(cell1Key)) {
        acc[cell1Key].amount += curr.amount;
        acc[cell1Key].donations += 1;
      } else if (message.includes(cell2Key)) {
        acc[cell2Key].amount += curr.amount;
        acc[cell2Key].donations += 1;
      }

      return acc;
    },
    { cell1: { amount: 0, donations: 0 }, cell2: { amount: 0, donations: 0 } }
  );

  return cells;
}

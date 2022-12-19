import type { NextApiRequest, NextApiResponse } from 'next';
import { getCellData } from '../../lib/cells';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cells = await getCellData();
  res.status(200).json(cells);
}

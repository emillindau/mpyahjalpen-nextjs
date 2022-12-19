import { getBidders } from '../../lib/bidders';
import type { Auctions } from '../../lib/types/gift.types';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Auctions>
) {
  const bidders = await getBidders();
  res.status(200).json(bidders);
}

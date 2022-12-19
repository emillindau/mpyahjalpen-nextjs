import { getDonations } from '../../lib/donations';
import type { Donation } from '../../lib/types/donations.types';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Donation[]>
) {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=300');
  const donations = await getDonations();
  res.status(200).json(donations);
}

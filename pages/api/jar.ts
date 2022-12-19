import { getCurrentJarData } from '../../lib/current';
import type { Jar } from '../../lib/types/jar.types';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Jar>
) {
  const data = await getCurrentJarData();

  res.status(200).json(data);
}

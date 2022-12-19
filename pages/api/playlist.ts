import { getPlaylist } from '../../lib/bidders';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { Playlist } from '../../lib/types/playlist.types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Playlist[]>
) {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=300');
  const playList = await getPlaylist();
  res.status(200).json(playList);
}

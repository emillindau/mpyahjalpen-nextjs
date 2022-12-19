import { CellResults } from '../lib/types/cell.types';
import type { Donation } from '../lib/types/donations.types';
import type { Auctions } from '../lib/types/gift.types';
import type { Playlist } from '../lib/types/playlist.types';

const ONE_MINUTE = 60_000;

const fetchDonations = async (): Promise<Donation[]> => {
  const donations = await fetch('/api/donations');
  return donations.json();
};

export const donationsQuery = (initialData: Donation[]) => ({
  queryKey: ['donations'],
  queryFn: () => fetchDonations(),
  staleTime: ONE_MINUTE * 2,
  refetchInterval: ONE_MINUTE * 2,
  refetchIntervalInBackground: true,
  initialData,
});

const fetchBidders = async (): Promise<Auctions> => {
  const bidders = await fetch('/api/bidders');
  const json = bidders.json();
  return json;
};

export const biddersQuery = (initialData: Auctions) => ({
  queryKey: ['bidders'],
  queryFn: () => fetchBidders(),
  staleTime: ONE_MINUTE * 2,
  refetchInterval: ONE_MINUTE * 2,
  refetchIntervalInBackground: true,
  initialData,
});

const fetchPlaylist = async (): Promise<Playlist[]> => {
  const playlist = await fetch('/api/playlist');
  const json = playlist.json();
  return json;
};

export const playlistQuery = (initialData: Playlist[]) => ({
  queryKey: ['playlist'],
  queryFn: () => fetchPlaylist(),
  staleTime: ONE_MINUTE * 2,
  refetchInterval: ONE_MINUTE * 2,
  refetchIntervalInBackground: true,
  initialData,
});

const fetchCells = async (): Promise<CellResults> => {
  const cells = await fetch('/api/cells');
  const json = cells.json();
  return json;
};

export const cellsQuery = (initialData: CellResults) => ({
  queryKey: ['cells'],
  queryFn: () => fetchCells(),
  staleTime: ONE_MINUTE * 2,
  refetchInterval: ONE_MINUTE * 2,
  refetchIntervalInBackground: true,
  initialData,
});

import { getDonations } from './donations';
import gifts from './gifts.json';
import { Donation } from './types/donations.types';
import type { Bid, Auctions, Auction } from './types/gift.types';
import type { Playlist } from './types/playlist.types';

const AUCTION_KEYS = gifts.map(g => g.key);

export async function getBidders() {
  const donations = await getDonations();
  const bidders = donations.reduce((acc, curr) => {
    AUCTION_KEYS.forEach(key => {
      if (curr?.message?.toLowerCase().includes(key)) {
        if (!acc[key]) acc[key] = {};

        const nameKey = curr.name?.toLowerCase();
        if (!acc[key][nameKey]) {
          acc[key][nameKey] = { ...curr, bids: 1 };
        } else {
          acc[key][nameKey] = {
            ...acc[key][nameKey],
            bids: acc[key][nameKey].bids + 1,
            amount: acc[key][nameKey].amount + curr.amount ?? 0,
          };
        }
      }
    });
    return acc;
  }, {} as Bid);

  return { bidders, gifts } as Auctions;
}

function getRemovedHash(donations: Donation[]) {
  const filteredRemove = donations
    .filter(don => don?.message?.toLowerCase().includes('remove'))
    .map(rf => ({
      removeHash: rf?.message
        ?.toLowerCase()
        .split('remove')
        ?.at?.(1)
        ?.split(' ')
        ?.at?.(1)
        ?.replace(/\s/g, ''),
      amount: rf.amount || 1,
      removedBy: rf.name,
    }));

  const filteredRemoveGroup = filteredRemove.reduce((acc, curr) => {
    if (!acc?.[curr.removeHash]) {
      acc[curr.removeHash] = { amount: curr.amount, removedBy: curr.removedBy };
    } else {
      acc[curr.removeHash] = {
        amount: (acc[curr.removeHash].amount += curr.amount),
        removedBy: curr.removedBy,
      };
    }
    return acc;
  }, {} as { [key: string]: { amount: number; removedBy: string } });

  return filteredRemoveGroup;
}

export async function getPlaylist(): Promise<Playlist[]> {
  const donations = await getDonations();
  const filtered = donations.filter(don =>
    don?.message?.toLowerCase().includes('play')
  );

  const removed = getRemovedHash(donations);

  const playlist = filtered.map<Playlist>(f => ({
    song: f?.message?.toLowerCase().split('play')?.at?.(1),
    hash: f.hash,
    amount: f.amount,
    hasBeenRemoved: (removed?.[f.hash]?.amount ?? -1) >= f.amount,
    removedBy: removed?.[f.hash]?.removedBy ?? null,
  }));

  const playlistUnique = [...new Set(playlist)];
  return playlistUnique;
}

export async function getBid(key: string): Promise<Auction> {
  const { bidders, gifts } = await getBidders();

  return {
    bidders: bidders[key] ?? null,
    gift: gifts.find(g => g.key === key),
  };
}

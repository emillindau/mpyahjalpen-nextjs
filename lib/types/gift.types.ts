import type { Donation } from './donations.types';

export interface Gift {
  title: string;
  key: string;
  description: string;
  image: string;
  lowestCost: number;
}

export enum GiftId {
  gift1 = 'gift1',
  gift2 = 'gift2',
  gift3 = 'gift3',
  gift4 = 'gift4',
  gift5 = 'gift5',
}

export interface Bidder {
  [key: string]: Donation & { bids: number };
}

export type Bid = {
  [key in GiftId]: Bidder;
};

export interface Auctions {
  bidders: Bid;
  gifts: Gift[];
}

export interface Auction {
  bidders: Bidder | null;
  gift?: Gift;
}

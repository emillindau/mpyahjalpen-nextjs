import type { Donation } from './types/donations.types';

export async function getDonations(numberOfDonations = 0) {
  if (!numberOfDonations) {
    try {
      const statsRaw = await fetch('http://localhost:3002/donations/count');
      numberOfDonations = (await statsRaw.json()).noOfDonations;
    } catch (e) {
      return [];
    }
  }

  let donations = [] as Donation[];
  try {
    const res = await fetch('http://localhost:3002/donations');
    donations = (await res.json()) as Donation[];
  } catch (e) {
    return [];
  }

  return donations;
}

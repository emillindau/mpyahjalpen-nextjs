import { getDonations } from './donations';
import type { Jar } from './types/jar.types';

export async function getCurrentJarData() {
  try {
    const statsRaw = await fetch('http://localhost:3002/donations/stats');
    const stats = await statsRaw.json();

    const donations = await getDonations(stats.noOfDonations);
    const [last] = donations.sort((a, b) => {
      return new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1;
    });

    return {
      prevAmount: last?.amount,
      ...stats,
    } as Jar;
  } catch (e) {}

  return {
    amount: 1000,
    prevAmount: 20,
    noOfDonations: 80,
    title: 'title',
    goal: 30_000,
  } as Jar;
}

import Head from 'next/head';
import { useQuery } from 'react-query';
import { DonationsList } from '../../components/donations/DonationsList';
import { Layout } from '../../components/layout/Layout';
import { getDonations } from '../../lib/donations';
import { donationsQuery } from '../../queries/donation-queries';
import type { GetServerSideProps } from 'next';
import type { Donation } from '../../lib/types/donations.types';

export const getServerSideProps: GetServerSideProps = async context => {
  const { res } = context;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const donations = await getDonations();
  return { props: { donations } };
};

export interface DonationsProps {
  donations: Donation[];
}

export default function Donations({ donations }: DonationsProps) {
  const { data, isError } = useQuery(donationsQuery(donations));

  if (isError) {
    return (
      <Layout>
        <h1>Something went wrong, blame someone</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Donations</title>
      </Head>
      <DonationsList donations={data} />
    </Layout>
  );
}

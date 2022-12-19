import Head from 'next/head';
import { useQuery } from 'react-query';
import { AuctionList } from '../../components/auction-list/AuctionList';
import { Layout } from '../../components/layout/Layout';
import { getBidders } from '../../lib/bidders';
import { biddersQuery } from '../../queries/donation-queries';
import type { GetServerSideProps } from 'next';
import type { Auctions as AuctionsType } from '../../lib/types/gift.types';

export const getServerSideProps: GetServerSideProps = async () => {
  const { bidders, gifts } = await getBidders();
  return { props: { bidders, gifts } };
};

export default function Auctions({ bidders, gifts }: AuctionsType) {
  const { data, isError } = useQuery(biddersQuery({ bidders, gifts }));

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
        <title>Auctions</title>
      </Head>
      <AuctionList {...data} />
    </Layout>
  );
}

import Head from 'next/head';
import { AuctionItem } from '../../components/auction-list/auction-item/AuctionItem';
import { Layout } from '../../components/layout/Layout';
import { getBid } from '../../lib/bidders';
import type { GetServerSideProps } from 'next';
import type { Auction } from '../../lib/types/gift.types';

export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context;
  const data = await getBid(params?.id as string);
  return { props: { ...data } };
};

export default function AuctionPage({ bidders, gift }: Auction) {
  return (
    <Layout>
      <Head>
        <title>{gift?.title}</title>
      </Head>
      <AuctionItem bidders={bidders} gift={gift} />
    </Layout>
  );
}

import Head from 'next/head';
import HistoryContent from '../../components/history/HistoryContent';

import { Layout } from '../../components/layout/Layout';
import { getSortedHistoryPostsData } from '../../lib/posts';
import type { GetStaticProps } from 'next';
import { Post } from '../../lib/types/post.types';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedHistoryPostsData();

  return {
    props: {
      posts,
    },
  };
};

export interface HistoryProps {
  posts: Post[];
}

export default function History({ posts }: HistoryProps) {
  return (
    <Layout>
      <Head>
        <title>History</title>
      </Head>
      <HistoryContent posts={posts} />
    </Layout>
  );
}

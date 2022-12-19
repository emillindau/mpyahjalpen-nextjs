import Head from 'next/head';
import { HistoryItem } from '../../components/history/history-item/HistoryItem';
import { Layout } from '../../components/layout/Layout';
import { getHistoryPostData, getAllHistoryPostIds } from '../../lib/posts';
import { Post } from '../../lib/types/post.types';

export async function getStaticPaths() {
  const paths = getAllHistoryPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getHistoryPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export interface HistoryPostProps {
  postData: Post;
}

export default function HistoryPost({ postData }: HistoryPostProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <HistoryItem {...postData} />
    </Layout>
  );
}

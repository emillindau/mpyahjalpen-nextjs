import Head from 'next/head';
import { useQuery } from 'react-query';
import { Layout } from '../../components/layout/Layout';
import { PlaylistWrapper } from '../../components/playlist/PlaylistWrapper';
import { getPlaylist } from '../../lib/bidders';
import { playlistQuery } from '../../queries/donation-queries';
import type { GetServerSideProps } from 'next';
import type { Playlist } from '../../lib/types/playlist.types';

export const getServerSideProps: GetServerSideProps = async context => {
  const { res } = context;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const playlist = await getPlaylist();
  return { props: { playlist } };
};

export interface PlaylistProps {
  playlist: Playlist[];
}

export default function Playlist({ playlist }: PlaylistProps) {
  const { data, isError } = useQuery(playlistQuery(playlist));

  if (isError) {
    return (
      <Layout>
        <h1>Näje. Error!</h1>
      </Layout>
    );
  }
  return (
    <Layout>
      <Head>
        <title>Playlist</title>
      </Head>
      <PlaylistWrapper playlist={data} />
    </Layout>
  );
}

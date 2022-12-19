import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { getCellData } from '../../lib/cells';
import type { CellResults } from '../../lib/types/cell.types';
import { Layout } from '../../components/layout/Layout';
import { CellFight } from '../../components/cell-fight/CellFight';
import { useQuery } from 'react-query';
import { cellsQuery } from '../../queries/donation-queries';

export const getServerSideProps: GetServerSideProps = async () => {
  const cells = await getCellData();

  return { props: { cells } };
};

export default function Cells({ cells }: { cells: CellResults }) {
  const { data, isError } = useQuery(cellsQuery(cells));

  if (isError) return null;

  return (
    <Layout>
      <Head>
        <title>Cellkampen</title>
      </Head>
      <CellFight {...data} />
    </Layout>
  );
}

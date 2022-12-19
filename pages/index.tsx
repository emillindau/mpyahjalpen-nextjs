import * as React from 'react';
import { useQuery } from 'react-query';
import { ScrollToProgress } from '../components/button/ScrollToTop';
import { Home } from '../components/home/Home';
import { Layout } from '../components/layout/Layout';
import { getCurrentJarData } from '../lib/current';
import { getSortedHistoryPostsData } from '../lib/posts';
import { getSteps } from '../lib/steps';
import { jarDataQuery } from '../queries/jar-queries';
import type { Jar } from '../lib/types/jar.types';
import type { Step } from '../lib/types/step.types';
import type { Post } from '../lib/types/post.types';

export async function getServerSideProps() {
  const current = await getCurrentJarData();
  const steps = getSteps();
  const history = getSortedHistoryPostsData();
  return { props: { current, steps, history } };
}

export interface StartProps {
  current: Jar;
  steps: Step[];
  history: Post[];
}

export default function Start({ current, steps, history }: StartProps) {
  const { data, isError } = useQuery(jarDataQuery(current));

  if (isError) {
    return (
      <Layout>
        <h1>Something went very very wrong</h1>
      </Layout>
    );
  }

  if (!data)
    return (
      <Layout>
        <h1>Could not fetch data</h1>
      </Layout>
    );

  return (
    <Layout>
      <Home jar={data} steps={steps} history={history} />
      <ScrollToProgress {...data} />
    </Layout>
  );
}

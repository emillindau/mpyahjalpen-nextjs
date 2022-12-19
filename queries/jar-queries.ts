import type { Jar } from '../lib/types/jar.types';

const ONE_MINUTE = 60_000;

const fetchJarData = async (): Promise<Jar> => {
  const res = await fetch('/api/jar');
  return res.json();
};

export const jarDataQuery = (initialData: Jar) => ({
  queryKey: ['jarData'],
  queryFn: () => fetchJarData(),
  staleTime: ONE_MINUTE * 2,
  refetchInterval: ONE_MINUTE * 2,
  refetchIntervalInBackground: true,
  initialData,
});

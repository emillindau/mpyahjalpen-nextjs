import * as React from 'react';
import { Completed } from '../completed/Completed';
import { Info } from '../info/Info';
import { ProgressWrapper } from '../progress/ProgressWrapper';
import type { StartProps } from '../../pages/index';

interface HomeProps {
  jar: StartProps['current'];
  steps: StartProps['steps'];
  history: StartProps['history'];
}

export const Home = ({ jar, steps, history }: HomeProps) => {
  const hasCompletedGoal = jar.amount >= jar.goal;

  return (
    <div>
      {hasCompletedGoal && <Completed {...jar} />}
      <Info jarData={jar} />
      <ProgressWrapper {...jar} steps={steps} history={history} />
    </div>
  );
};

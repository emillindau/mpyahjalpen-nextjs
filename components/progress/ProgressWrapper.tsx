import {
  ProgressContainer,
  CurrentAmount,
  ProgressWrapperStyle,
  HistoryEntry,
} from './Progress.styles';
import { Progress } from './Progress';
import { LevelSteps } from './level-steps/LevelSteps';
import type { Jar } from '../../lib/types/jar.types';
import type { Step } from '../../lib/types/step.types';
import type { Post } from '../../lib/types/post.types';

type ProgressWrapperProps = Pick<Jar, 'amount' | 'goal'> & {
  steps: Step[];
  history: Post[];
};

export type StepWithProgress = Step & { progress: number; completed: boolean };
export type StepsMap = Record<string, StepWithProgress[]>;

export const ProgressWrapper = ({
  amount,
  goal,
  steps,
  history,
}: ProgressWrapperProps) => {
  const pixelHeight = Math.round(goal / 3);
  const progress = Math.min((amount / goal) * 100, 100);

  const stepsWithProgress = steps.map(s => ({
    ...s,
    progress: Math.min((s.level / goal) * 100, 100),
    completed: amount >= s.level,
  }));

  const historyWithProgress = history.map(h => ({
    ...h,
    progress: Math.min((h.amount / goal) * 100, 100),
  }));

  const stepMap = stepsWithProgress.reduce((acc, curr) => {
    if (!acc[curr.level]) acc[curr.level] = [];
    acc[curr.level].push(curr);
    return acc;
  }, {} as StepsMap);

  return (
    <ProgressContainer>
      <ProgressWrapperStyle totalHeight={pixelHeight}>
        <CurrentAmount progress={progress} totalHeight={pixelHeight}>
          🎉 {amount} SEK
        </CurrentAmount>
        {historyWithProgress.map(h => (
          <HistoryEntry
            progress={h.progress}
            key={h.id}
            totalHeight={pixelHeight}
          >
            {h.id}
          </HistoryEntry>
        ))}
        <Progress progress={progress} steps={stepsWithProgress} />
        {Object.values(stepMap).map((levelSteps, n) => (
          <LevelSteps
            key={n}
            levelSteps={levelSteps}
            levelIndex={n}
            totalHeight={pixelHeight}
          />
        ))}
      </ProgressWrapperStyle>
    </ProgressContainer>
  );
};

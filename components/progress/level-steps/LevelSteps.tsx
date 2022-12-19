import { CompletedCheckStyled, StepTooltip } from '../Progress.styles';

import { useState } from 'react';
import { MultiStepWrapper } from './LevelSteps.style';
import { StyledButton } from '../../layout/button/Button.styles';
import { useRouter } from 'next/router';
import { Highlight } from '../../stats/Stats.styles';
import type { StepWithProgress } from '../ProgressWrapper';
import { Mustach } from './Mustach';

const CompletedCheck = () => (
  <CompletedCheckStyled className="material-icons">check</CompletedCheckStyled>
);

interface LevelStepsProps {
  levelSteps: StepWithProgress[];
  levelIndex: number;
  totalHeight: number;
}

export const LevelSteps = ({
  levelSteps = [],
  levelIndex,
  totalHeight,
}: LevelStepsProps) => {
  const router = useRouter();
  const [showHasMore, setShowHasMore] = useState(false);
  const hasMore = levelSteps.length > 1;
  const [first] = levelSteps;

  if (!showHasMore) {
    return (
      <StepTooltip
        completed={first.completed}
        totalHeight={totalHeight}
        progress={first.progress}
        odd={first.level === 20000 ? false : levelIndex % 2 === 0}
        small={first.small}
        invert={levelIndex % 5 === 0}
      >
        <h2>
          <Highlight>{first.level} SEK</Highlight>
        </h2>

        {first.level === 15000 && <Mustach />}

        {!hasMore && (
          <>
            <h3>{!first.open && first.title}</h3>
            <p>{first.description}</p>
          </>
        )}
        {hasMore && <h3>{levelSteps.length} assignments</h3>}
        {first.open && !first.completed && (
          <StyledButton
            onClick={() => {
              router.push(`/register/${first.level}`);
            }}
          >
            Signup
          </StyledButton>
        )}
        {hasMore && (
          <StyledButton onClick={() => setShowHasMore(true)}>Show</StyledButton>
        )}
        {first.completed && <CompletedCheck />}
      </StepTooltip>
    );
  }

  return (
    <MultiStepWrapper progress={first.progress} totalHeight={totalHeight}>
      <h2>{first.level} SEK</h2>
      {levelSteps.map((s, i) => (
        <div key={s.progress + i}>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </div>
      ))}
      <StyledButton onClick={() => setShowHasMore(false)}>X</StyledButton>
    </MultiStepWrapper>
  );
};

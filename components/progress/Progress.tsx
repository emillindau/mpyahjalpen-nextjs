import { Step } from '../../lib/types/step.types';
import { ProgressStyle, StepStyle } from './Progress.styles';
import type { StepWithProgress } from './ProgressWrapper';

interface ProgressProps {
  className?: string;
  steps: StepWithProgress[];
  progress: number;
}

export const Progress = ({
  className,
  steps,
  progress,
  ...rest
}: ProgressProps) => {
  return (
    <ProgressStyle className={className} progress={progress} {...rest}>
      {steps &&
        steps.map(s => <StepStyle key={s.progress} progress={s.progress} />)}
    </ProgressStyle>
  );
};

import steps from './steps.json';
import type { Step } from './types/step.types';

export function getSteps() {
  return steps as Step[];
}

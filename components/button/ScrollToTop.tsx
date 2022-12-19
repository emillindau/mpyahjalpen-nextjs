import type { Jar } from '../../lib/types/jar.types';
import { ScrollToTopStyle } from './Button.styles';

interface ScrollToProgressProps {
  amount: Jar['amount'];
  goal: Jar['goal'];
}

export const ScrollToProgress = ({ amount, goal }: ScrollToProgressProps) => {
  const handleClick = () => {
    const progress = Math.min(Math.round((amount / goal) * 100), 100);
    const pixelHeight = Math.round(goal / 3);
    const pixelProgress = progress * (pixelHeight / 100);

    window.scrollTo(0, pixelProgress);
  };

  return <ScrollToTopStyle onClick={handleClick}>💸</ScrollToTopStyle>;
};

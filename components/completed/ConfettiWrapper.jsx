import Confetti from 'react-confetti';

export const ConfettiWrapper = () => {
  if (typeof window !== 'undefined') {
    return (
      <Confetti
        colors={['#F6F1ED', '#B4A69B', '#E34586', '#00B2AA', '#ffc107']}
        width={window.innerWidth - 50}
        height={window.innerHeight}
      />
    );
  }
  return null;
};

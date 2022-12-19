import Image from 'next/image';
import { MustachWrapper } from './LevelSteps.style';

export const Mustach = () => {
  return (
    <MustachWrapper>
      <Image
        priority
        src={`/images/antonshook.png`}
        width={70}
        height={110}
        alt="mustach"
      />
    </MustachWrapper>
  );
};

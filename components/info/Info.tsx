import { InfoWrapper } from './Info.styles';
import { Stats } from '../stats/Stats';
import type { StartProps } from '../../pages/index';

interface InfoProps {
  jarData: StartProps['current'];
}

export const Info = ({ jarData }: InfoProps) => {
  return (
    <InfoWrapper>
      <Stats {...jarData} />
    </InfoWrapper>
  );
};

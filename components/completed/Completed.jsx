import { CompletedHeader, CompletedHighlight } from './Completed.styles';
import { ConfettiWrapper } from './ConfettiWrapper';

export const Completed = ({ amount }) => {
  return (
    <div>
      <ConfettiWrapper />
      <CompletedHighlight>
        <CompletedHeader>
          🎉 WE DID IT! {amount} SEK COLLECTED!! 🎉
        </CompletedHeader>
      </CompletedHighlight>
    </div>
  );
};

import type { Playlist } from '../../../lib/types/playlist.types';
import {
  ListItemWrapper,
  RemoveCard,
  SongTitle,
  StyledButton,
  RemovedByText,
  RemovedByHighlight,
} from './PlaylistItem.styles';

interface PlaylistItemProps {
  item: Playlist;
  handleClick: (hash: number) => void;
  showRemoveInfo: boolean;
}

export const PlaylistItem = ({
  item,
  handleClick,
  showRemoveInfo,
}: PlaylistItemProps) => {
  return (
    <li>
      <ListItemWrapper>
        <SongTitle removed={item.hasBeenRemoved}>{item.song}</SongTitle>
        {!item.hasBeenRemoved && (
          <StyledButton onClick={() => handleClick(item.hash)}>
            {showRemoveInfo ? '-' : 'x'}
          </StyledButton>
        )}
        {item.removedBy && item.hasBeenRemoved && (
          <RemovedByText>
            Removed by:{' '}
            <RemovedByHighlight>{item.removedBy}</RemovedByHighlight>
          </RemovedByText>
        )}
      </ListItemWrapper>
      {showRemoveInfo && (
        <RemoveCard>
          <p>
            Cost:{' '}
            <span style={{ fontWeight: 'bold' }}>{item.amount * 2}:-</span>
          </p>
          <p>
            Message:{' '}
            <span style={{ fontWeight: 'bold' }}>remove {item.hash}</span>
          </p>
        </RemoveCard>
      )}
    </li>
  );
};

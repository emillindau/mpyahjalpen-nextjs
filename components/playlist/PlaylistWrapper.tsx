import Link from 'next/link';
import { useState } from 'react';
import type { PlaylistProps } from '../../pages/playlist';
import { Highlight } from '../stats/Stats.styles';
import { PlaylistItem } from './playlist-item/PlaylistItem';
import {
  InfoPlaylist,
  PlaylistUL,
  PlaylistWrapperStyled,
  Wrapper,
} from './PlaylistWrapper.styles';

export const PlaylistWrapper = ({ playlist }: PlaylistProps) => {
  const [showRemoveInfo, setShowRemoveInfo] = useState(-1);

  return (
    <Wrapper>
      <PlaylistWrapperStyled>
        <div>
          <h1>
            <Highlight>The Playlist</Highlight>
          </h1>
          <PlaylistUL>
            {playlist.map(p => (
              <PlaylistItem
                key={p.hash}
                item={p}
                showRemoveInfo={showRemoveInfo === p.hash}
                handleClick={(hash: number) => {
                  setShowRemoveInfo(prevHash => {
                    if (prevHash == hash) return -1;
                    return hash;
                  });
                }}
              />
            ))}
          </PlaylistUL>
        </div>
      </PlaylistWrapperStyled>
      <InfoPlaylist>
        <h2>How to add a song</h2>
        <h3>
          Link to{' '}
          <Link href="https://open.spotify.com/playlist/3ywQRR9M1X2AVnptCv77U6?si=fe41f17b7bbf469b">
            The playlist
          </Link>
        </h3>
        <p>
          1. Go to our{' '}
          <Link href="https://bossan.musikhjalpen.se/mpyahjaelpen">Bössa</Link>
        </p>
        <p>
          2. <Highlight>Check</Highlight> &ldquo;Visa upp mitt bidrag och
          eventuellt meddelande på insamlingen&rdquo;
        </p>
        <p>
          3. Mark your message with &ldquo;play&rdquo; followed by the song, eg.{' '}
          <Highlight>
            &ldquo;play david ritschard - sverigerocken&rdquo;
          </Highlight>
        </p>
      </InfoPlaylist>
    </Wrapper>
  );
};

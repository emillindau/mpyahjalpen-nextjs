export interface Playlist {
  song: string;
  hash: number;
  amount: number;
  hasBeenRemoved: boolean;
  removedBy: string | null;
}

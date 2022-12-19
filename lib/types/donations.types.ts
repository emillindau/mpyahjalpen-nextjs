export interface Donation {
  amount: number;
  hidden_amount: boolean;
  public: boolean;
  name: string;
  message: string;
  timestamp: string;
  hash: number;
  raffle?: {
    winner: boolean;
  };
}

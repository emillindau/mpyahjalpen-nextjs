interface PriceData {
  value: number;
  text: string;
  url?: string;
}

export interface PostMetadata {
  title: string;
  date: string;
  prices: number;
  amount: number;
  priceData: PriceData[];
}

export interface Post extends PostMetadata {
  id: string;
  contentHtml: string;
  [key: string]: any;
}

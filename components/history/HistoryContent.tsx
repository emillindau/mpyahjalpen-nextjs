import { Card } from '../card/Card';
import { Date } from '../date/Date';
import { CardContent, CardTitle } from '../card/Card.styles';
import { useRouter } from 'next/router';
import { PageListWrapper } from '../layout/List.styles';
import { Highlight } from '../stats/Stats.styles';
import { HistoryProps } from '../../pages/history';

export default function HistoryContent({ posts }: HistoryProps) {
  const router = useRouter();

  const handleClick = (e, id) => {
    router.push(`history/${id}`);
  };

  return (
    <PageListWrapper>
      {posts.map(({ id, date, title, amount, priceData }, i) => (
        <Card key={id} onClick={e => handleClick(e, id)} itemIndex={i}>
          <CardTitle>
            <h3>{title}</h3>
            <small>
              <Date dateString={date} />
            </small>
          </CardTitle>
          <CardContent>
            <p>
              Reached amount: <Highlight>{amount} SEK</Highlight>
            </p>
          </CardContent>
          <CardContent>
            <p>Assignments: {priceData.length}</p>
          </CardContent>
        </Card>
      ))}
    </PageListWrapper>
  );
}

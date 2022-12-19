import { Post } from '../../../lib/types/post.types';
import { CardContent, CardTitle } from '../../card/Card.styles';
import { Date } from '../../date/Date';
import { PageListWrapper } from '../../layout/List.styles';
import { Highlight } from '../../stats/Stats.styles';
import { HistoryItemStyle, StyledListItem } from './HistoryItem.styles';

interface HistoryItemProps {
  title: Post['title'];
  date: Post['date'];
  contentHtml: Post['contentHtml'];
  priceData: Post['priceData'];
}

export const HistoryItem = ({
  title,
  date,
  contentHtml,
  priceData,
}: HistoryItemProps) => {
  const handleClick = (_, url: string) => {
    if (url !== '') {
      window.open(url, '_blank');
    }
  };

  return (
    <HistoryItemStyle>
      <h2>{title}</h2>
      <Date dateString={date} />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      {priceData.length > 0 && (
        <>
          <h3> Prior assignments </h3>
          <p style={{ marginBottom: '2em' }}>
            Here you can find the old assignments, clicking a card will route
            and prompt you to open the media on Slack. Having Slack open will
            navigate you immediately!
          </p>
          <PageListWrapper>
            {priceData.map(({ value, text, url }, i) => (
              <StyledListItem
                key={i}
                onClick={e => handleClick(e, url)}
                hasLink={Boolean(url)}
              >
                <CardTitle>
                  <h3>{text}</h3>
                </CardTitle>
                <CardContent>
                  <p>
                    <Highlight>{value} SEK</Highlight>
                  </p>
                  {url && <p>Take me there!</p>}
                </CardContent>
              </StyledListItem>
            ))}
          </PageListWrapper>
        </>
      )}
    </HistoryItemStyle>
  );
};

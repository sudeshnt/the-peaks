import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

export const NewsContainer = styled(InfiniteScroll)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .scroll {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const ArticleContainer = styled.div`
  flex: 1 0 300px;
  padding: 10px;
  max-width: 300px;
  height: 300px;
`;
export const LoaderComponent = styled.div`
`;

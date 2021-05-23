import queryString from 'query-string';
import { useContext, useEffect, useRef } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AppContext from 'AppContext';
import Article from 'components/article/Article';
import Loader from 'components/common/loader/Loader';
import SubHeader from 'components/common/sub-header/SubHeader';
import usePagination from 'hooks/usePagination';
import { searchNews } from 'state/article/thunks';

const Search = () => {
  const { NewsContainer, ArticleContainer } = Styled;
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    items: news,
    loading,
    totalItems,
  } = useSelector((state) => state.article);
  const { sortOrder } = useContext(AppContext);
  const {
    page,
    pageSize,
    onPageChange,
    // total,
  } = usePagination({
    total: totalItems,
  });

  useEffect(() => {
    search();
  }, [location.search]);

  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    search();
  }, [page, sortOrder]);

  const search = (reset = true) => {
    const { q: query } = queryString.parse(location.search);
    if (query) {
      dispatch(searchNews(query, sortOrder, page, pageSize, reset));
    }
  };

  const onReachPageEnd = () => {
    onPageChange(page + 1);
  };

  return (
    <div className="page-content">
      <SubHeader title="Search Results" />
      <section>
        { loading && <Loader /> }
        <NewsContainer
          dataLength={totalItems}
          next={onReachPageEnd}
          hasMore={false}
          scrollThreshold={0.9}
          loader={<h4>Loading...</h4>}
        >
          <div id="scroll">
            {
              news?.map((article, index) => (
                <ArticleContainer key={article.id}>
                  <Article
                    article={article}
                    index={index}
                  />
                </ArticleContainer>
              ))
            }
          </div>
        </NewsContainer>
      </section>
    </div>
  );
};

const Styled = {
  // NewsContainer: styled(InfiniteScroll)`
  NewsContainer: styled.div`
    display:flex;
    #scroll {
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `,
  ArticleContainer: styled.div`
    flex: 1 0 300px;
    padding: 10px;
    max-width: 300px;
    height: 300px;
  `,
};

export default Search;

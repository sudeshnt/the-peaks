import queryString from 'query-string';
import { useContext, useEffect, useRef } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AppContext from 'AppContext';
import Article from 'components/article/Article';
import Loader from 'components/common/loader/Loader';
import SubHeader from 'components/common/sub-header/SubHeader';
import usePagination from 'hooks/usePagination';
import { setLoading } from 'state/article/actions';
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
  }, [sortOrder]);

  useEffect(() => {
    if (page > 1) {
      search(false);
    }
  }, [page]);

  const search = (reset = true) => {
    const { q: query } = queryString.parse(location.search);
    if (query) {
      dispatch(searchNews(query, sortOrder, page, pageSize, reset));
    }
  };

  const onReachPageEnd = () => {
    dispatch(setLoading());
    onPageChange(page + 1);
  };

  const LoaderComponent = () => (
    <div style={{ minWidth: '1vw' }}>
      <Loader />
    </div>
  );

  return (
    <div className="page-content">
      <SubHeader title="Search Results" />
      <section>
        { loading && <Loader /> }
        <NewsContainer
          initialLoad={false}
          pageStart={1}
          loadMore={onReachPageEnd}
          hasMore={!loading}
          loader={(
            <LoaderComponent key={1} />
          )}
        >
          <div className="scroll" key={2}>
            {
              news?.map((article, index) => (
                <ArticleContainer key={article.id + Math.random()}>
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
  NewsContainer: styled(InfiniteScroll)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
    .scroll {
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

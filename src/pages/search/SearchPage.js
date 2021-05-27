import queryString from 'query-string';
import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ArticleContainer, LoaderComponent, NewsContainer } from './styled';
import AppContext from 'AppContext';
import Article from 'components/article/Article';
import EmptyResults from 'components/empty-results/EmptyResults';
import Loader from 'components/loader/Loader';
import SubHeader from 'components/sub-header/SubHeader';
import usePagination from 'hooks/usePagination';
import { resetSearchNews, setLoading } from 'state/search/actions';
import { searchNews } from 'state/search/thunks';

const SearchPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    searchResults: news,
    loading,
    totalItems,
  } = useSelector((state) => state.search);
  const { sortOrder } = useContext(AppContext);

  const {
    page,
    pageSize,
    onPageChange,
  } = usePagination({
    total: totalItems,
  });

  useEffect(() => {
    const { q } = queryString.parse(location.search);
    if (q) {
      dispatch(setLoading());
      onPageChange(1, 0);
      search();
    } else {
      dispatch(resetSearchNews());
    }
  }, [location.search]);

  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    dispatch(setLoading());
    onPageChange(1, 0);
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
      dispatch(searchNews(query, sortOrder, reset ? 1 : page, pageSize, reset));
    }
  };

  const onReachPageEnd = () => {
    dispatch(setLoading());
    onPageChange(page + 1);
  };

  return (
    <div className="page-content">
      <SubHeader title="Search Results" />
      <section>
        { loading && <Loader /> }
        {
          loading || news?.length > 0 ? (
            <NewsContainer
              initialLoad={false}
              pageStart={1}
              loadMore={onReachPageEnd}
              hasMore={!loading && news.length < totalItems}
              loader={(
                <LoaderComponent key="loader">
                  <Loader />
                </LoaderComponent>
              )}
            >
              <div className="scroll" key="item-container">
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
          ) : (
            <EmptyResults text="Search results empty" />
          )
        }

      </section>
    </div>
  );
};

export default SearchPage;

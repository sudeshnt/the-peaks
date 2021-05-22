import queryString from 'query-string';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Article from 'components/article/Article';
import Loader from 'components/common/loader/Loader';
import SubHeader from 'components/common/sub-header/SubHeader';
import { ArticleTypes } from 'config/shared';
import { searchNews } from 'state/article/thunks';

const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    items: news,
    loading,
  } = useSelector((state) => state.article);

  const { NewsContainer, ArticleContainer } = Styled;

  useEffect(() => {
    const { q } = queryString.parse(location.search);
    if (q) {
      search(q);
    }
  }, [location.search]);

  const search = (query) => {
    dispatch(searchNews(query));
  };

  return (
    <div className="page-content">
      <SubHeader title="Search Results" />
      <section>
        { loading && <Loader /> }
        <NewsContainer>
          {
            news?.map((article) => (
              <ArticleContainer key={article.id}>
                <Article
                  type={ArticleTypes.WITH_TITLE_AND_THUMBNAIL}
                  article={article}
                />
              </ArticleContainer>
            ))
          }
        </NewsContainer>

      </section>
    </div>
  );
};

const Styled = {
  NewsContainer: styled.div`
    display:flex;
    flex-wrap: wrap;
    width: auto;
  `,
  ArticleContainer: styled.div`
    flex: 1 0 350px;
    padding: 10px;
    height: 350px;
    max-width: 350px;
  `,
};

export default Search;

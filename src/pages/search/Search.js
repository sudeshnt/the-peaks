import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import queryString from "query-string"
import SubHeader from '../../components/common/sub-header/SubHeader';
import { searchNews } from '../../state/article/thunks';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../../components/article/Article';
import styled from 'styled-components';
import { ArticleTypes } from '../../config/shared';
import URLS from '../../config/urls';

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    items: news,
    loading
  } = useSelector(state => state.article)

  const { NewsContainer } = Styled;

  useEffect(_ => {
    const { q } = queryString.parse(location.search);
    if (q) {
      search(q)
    }
  }, [ location.search ])

  const search = query => {
    dispatch(searchNews(query))
  }

  const articleDetails = articleId => {
    history.push(`${URLS.ARTICLE}/${encodeURIComponent(articleId)}`)
  }

  return (
    <div className="page-content">
      <SubHeader title={'Search Results'}/>
      <section>
        {
          news?.map(article => (
            <NewsContainer key={article.id} onClick={() => articleDetails(article.id)}>
              <Article 
                type={ArticleTypes.WITH_TITLE_AND_THUMBNAIL}
                article={article} />
            </NewsContainer>
          ))
        }
      </section>
    </div>
  )
}

const Styled = {
  NewsContainer: styled.div`
    flex: 1 0 300px;
    padding: 10px;
    height: 300px; 
  `
}

export default Search;
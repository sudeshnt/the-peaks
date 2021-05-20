import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import * as newsApi from "../../api/news";
import Button from '../../components/common/button/Button';

const Article = () => {
  const {
    articleId
  } = useParams()
  const [ article, setArticle ] = useState(null);

  useEffect(() => {
    fetchArticleDetails(decodeURIComponent(articleId));
  }, [articleId])

  const fetchArticleDetails = async articleId => {
    try {
      const articleDetails = await newsApi.newsDetails(articleId);
      setArticle(articleDetails?.data?.response?.content)
    } catch(e) {

    }
  }

  return (
    <div className="page-content">
      <section>
        {
          article &&
          <Styled.NewsContainer>
              
            <div className="text-section">
              <Button title="remove bookmark" />
              <h1>{article.webTitle}</h1>
              <h3>{article.webTitle}</h3>
              <hr/>
              <div dangerouslySetInnerHTML={{
                __html: article.fields?.body
              }} />
            </div>
            <div className="image-section">
              <img src={article.fields?.thumbnail}/>
            </div>
          </Styled.NewsContainer>
        }
      </section>
    </div>
  )
}

const Styled = {
  NewsContainer: styled.div`
    display: flex;
    flex-wrap: wrap;

    .text-section {
      flex: 2;
      flex-direction: column;

      h1, h2 {
        font-weight: 700;
        letter-spacing: 0.07px;
      }

      h1 {
        font-size: 34px;
        line-height: 39px;
      }

      h2 {
        font-size: 20px;
        line-height: 26px;
      }

      img {
        width: 100%;
      }
    }
    
    .image-section {
      flex: 1;
      align-items: center;
      padding-left: 50px;

      img {
        width: 100%;
        height: 300px;
      }
    }
  `
}

export default Article;
import styled from 'styled-components';
import { rgba } from 'polished';
import { useHistory } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { ArticleTypes } from 'config/shared';
import URLS from 'config/urls';
import images from 'assets/images';

const Styled = {
  ArticleContainer: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0 3px 5px 0 rgb(0 0 0 / 50%);
    display: flex;
    flex-direction: column;
    color: white;
    border-bottom: 2px solid chocolate;
    cursor: pointer;
    box-sizing: border-box;
    background: #0D47A1;
    
    &:hover {
      opacity: 0.9
    }
  `,
  ArticleImage: styled.img`
    ${({ imageAvailable }) => (
    imageAvailable ? {
      width: '100%',
      height: '100%',
    } : {
      margin: 'auto 2rem',
    }
  )}
  `,
  ArticleBody: styled.div`
    background: ${rgba('#09357B', 0.8)};
    position: absolute;
    bottom: 0;
    left: 1px;
    z-index: 1;
    padding: 10px;
    max-height: calc(100% - 20px);
    width: calc(100% - 22px);
  `,
  ArticleTitle: styled.div`
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  `,
  ArticleDescription: styled.div`
    font-size: 14px;
    line-height: 20px;
  `,
};

const Article = ({
  type,
  article,
}) => {
  const {
    ArticleContainer, ArticleImage, ArticleBody, ArticleTitle, ArticleDescription,
  } = Styled;
  const history = useHistory();

  const articleDetails = (articleId) => {
    history.push(`${URLS.ARTICLE}/${encodeURIComponent(articleId)}`);
  };

  return (
    <ArticleContainer className="article" onClick={() => articleDetails(article?.id)}>
      <ArticleImage imageAvailable={article?.fields?.thumbnail} src={article?.fields?.thumbnail ?? images.logo} alt="" />
      <ArticleBody>
        <ArticleTitle>
          {article?.webTitle}
        </ArticleTitle>
        {
          type === ArticleTypes.WITH_TITLE_THUMBNAIL_AND_DESCRIPTION && (
          <ArticleDescription>
            <div dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(article?.fields?.headline),
            }}
            />
          </ArticleDescription>
          )
        }
      </ArticleBody>
    </ArticleContainer>
  );
};

export default Article;

import DOMPurify from 'dompurify';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import images from 'assets/images';
import { ArticleTypes } from 'config/shared';
import URLS from 'config/urls';

const borderColors = [
  '#388E3C', '#D32F2F', '#FFC107', '#2196F3',
];

const Styled = {
  ArticleContainer: styled.div`
    position: relative;
    width: 100%;
    height: ${({ type }) => (type === ArticleTypes.WITH_TITLE ? '110px' : '300px')};
    box-shadow: 0 3px 5px 0 rgb(0 0 0 / 50%);
    display: flex;
    flex-direction: column;
    color: white;
    border-bottom: 2px solid ${({ index }) => borderColors[index % 4]};
    cursor: pointer;
    box-sizing: border-box;
    background: #0D47A1;
    
    &:hover {
      opacity: 0.9
    }
  `,
  ArticleImageContainer: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    max-height: 300px;

    img {
    ${({ imageAvailable }) => (
    imageAvailable ? {
      width: '100%',
      height: '100%',
    } : {
      width: '200px',
      height: '80px',
      margin: '80px auto',
    }
  )}
  }
  `,
  ArticleBody: styled.div`
    background: ${rgba('#09357B', 0.8)};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    padding: 10px;
    max-height: calc(100% - 20px);
    width: calc(100% - 20px);
  `,
  ArticleTitle: styled.div`
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    height: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `,
  ArticleDescription: styled.div`
    font-size: 14px;
    line-height: 20px;
  `,
};

const Article = ({
  type = ArticleTypes.WITH_TITLE_AND_THUMBNAIL,
  article,
  index,
}) => {
  const {
    ArticleContainer, ArticleImageContainer,
    ArticleBody, ArticleTitle, ArticleDescription,
  } = Styled;
  const history = useHistory();

  const articleDetails = (articleId) => {
    history.push(`${URLS.ARTICLE}/${encodeURIComponent(articleId)}`);
  };

  return (
    <ArticleContainer
      index={index}
      type={type}
      className="article"
      onClick={() => articleDetails(article?.id)}
    >
      {
        type !== ArticleTypes.WITH_TITLE
        && (
          <ArticleImageContainer imageAvailable={article?.fields?.thumbnail}>
            <img src={article?.fields?.thumbnail ?? images.logo} alt="" />
          </ArticleImageContainer>
        )
      }
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

Article.propTypes = {
  type: PropTypes.oneOf([
    ArticleTypes.WITH_TITLE,
    ArticleTypes.WITH_TITLE_AND_THUMBNAIL,
    ArticleTypes.WITH_TITLE_THUMBNAIL_AND_DESCRIPTION,
  ]),
  index: PropTypes.number,
  article: PropTypes.object,
};

export default Article;

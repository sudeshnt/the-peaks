import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  ArticleBody, ArticleContainer, ArticleDescription, ArticleImageContainer, ArticleTitle,
} from './styled';
import images from 'assets/images';
import { ArticleTypes } from 'config/shared';
import URLS from 'config/urls';

const Article = ({
  type = ArticleTypes.WITH_TITLE_AND_THUMBNAIL,
  article,
  index,
}) => {
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

import styled from "styled-components";
import { rgba } from 'polished';
import { ArticleTypes } from "../../config/shared";

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
    
    &:hover {
      opacity: 0.9
    }
  `,
  ArticleImage: styled.img`
    width: 100%;
    height: 100%;
  `,
  ArticleBody: styled.div`
    background: ${rgba('#09357B', 0.8)};
    position: absolute;
    bottom: 0;
    z-index: 1;
    padding: 10px;
    max-height: calc(100% - 20px);
    width: calc(100% - 20px);
  `,
  ArticleTitle: styled.div`
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  `,
  ArticleDescription: styled.div`
    font-size: 14px;
    line-height: 20px;
  `
}

const Article = ({
  type,
  article
}) => {

  const { ArticleContainer, ArticleImage, ArticleBody, ArticleTitle, ArticleDescription } = Styled;

  return (
    <ArticleContainer className="article">
      <ArticleImage src={article?.fields?.thumbnail}  alt="" />
      <ArticleBody>
        <ArticleTitle>
          {article?.webTitle}
        </ArticleTitle>
        {
          type === ArticleTypes.WITH_TITLE_THUMBNAIL_AND_DESCRIPTION && <ArticleDescription>
            <div dangerouslySetInnerHTML={{
              __html: article?.fields?.headline
            }} />
          </ArticleDescription>
        }
      </ArticleBody>
    </ArticleContainer>
  )

}

export default Article;
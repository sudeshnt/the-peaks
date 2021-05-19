import styled from "styled-components";

const Styled = {
  ArticleContainer: styled.div`
    position: relative;
    width: 600px;
    height: 400px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0, 0.4);
    display: flex;
    flex-direction: column;
    color: white;
    border-bottom: 2px solid white;
  `,
  ArticleImage: styled.img`
    width: 100%;
    height: 100%;
  `,
  ArticleBody: styled.div`
    background: rgba(0,0,0, 0.4);
    position: absolute;
    bottom: 0;
    z-index: 1;
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

const Article = () => {

  const { ArticleContainer, ArticleImage, ArticleBody, ArticleTitle, ArticleDescription } = Styled;

  return (
    <ArticleContainer>
      <ArticleImage src={'https://source.unsplash.com/random'}  alt="" />
      <ArticleBody>
        <ArticleTitle>
          Global report: WHO warns of accelerating Covid-19 infections in Africa
        </ArticleTitle>
        <ArticleDescription>
          Continent is seeing more cases spread to the provinces; Trump supporters can’t sue over catching Covid-19 at rallies; Brazil confirms 30,000 new cases
        </ArticleDescription>
      </ArticleBody>
    </ArticleContainer>
  )

}

export default Article;
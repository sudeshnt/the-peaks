import { rgba } from 'polished';
import styled from 'styled-components';

export const NewsContainer = styled.div`
  .publication-date {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 31px;
    letter-spacing: 0.83px;
  }

  h1, h2, h3 {
    font-weight: 700;
    letter-spacing: 0.07px;
    margin: 0 0 10px 0;
  }

  h1 {
    font-size: 34px;
    line-height: 39px;
  }

  h2 {
    font-size: 20px;
    line-height: 26px;
  }

  hr {
    border-top: 1px solid ${rgba('#979797', 0.1)};
  }

  .body {
    display: flex;
    flex-wrap: wrap;

    img {
      width: 100%;
      height: auto;
    }

    .article {
      flex: 2;
      flex-direction: column;
    }
    
    .image {
      flex: 1 0 300px;
      align-items: center;
      padding: 8px 0 0 2.5rem;

      p {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
`;

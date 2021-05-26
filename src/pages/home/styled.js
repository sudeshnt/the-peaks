import styled from 'styled-components';

export const TopStoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
  
  ${({ loading }) => {
    if (loading) {
      return {
        height: '200px',
        justifyContent: 'center',
        alignItems: 'center',
      };
    }
    return {};
  }}

  & > .column {
    flex: 1 1 500px;
    margin: 5px;

    &.left {
      .article {
        height: 100%;
        min-height: 300px;
      }
    }

    &.right {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin: 0;

      .top, .bottom {
        display: flex;
        flex-wrap: wrap;
      }

      .bottom {
        height: 120px;

        @media (max-width: 570px) {
          height: 240px !important;
        }
      }

      .column {
        flex: 1 0 200px;
        margin: 5px;

        .article {
        }
      }
    }
  }
`;

export const SectionNewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ loading }) => {
    if (loading) {
      return {
        height: '200px',
        justifyContent: 'center',
        alignItems: 'center',
      };
    }
    return {};
  }}

  .section {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;

    .article-container {
      flex: 1 0 300px;
      padding: 10px;
      height: 300px;
    }
  }
`;

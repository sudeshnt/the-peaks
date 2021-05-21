import styled from 'styled-components';

export const TopStoriesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
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
    flex: 1 500px;
    margin: 5px;

    &.right {
      display: flex;
      flex-wrap: wrap;
      margin: 0 0;

      .column {
        flex: 1 0 250px;
        margin: 5px;

        .article {
          height: 240px;
        }
      }
    }
  }
`;

export const SportsSection = styled.div`
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

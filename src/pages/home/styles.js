import styled from "styled-components";

export const TopStoriesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  ${({loading}) => {
    if (loading) {
      return {
        height: '200px',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  }}

  & > .column {
    flex: 1 500px;
    margin: 5px;

    &.right {
      display: flex;

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

  ${({loading}) => {
    if (loading) {
      return {
        height: '200px',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  }}
`;
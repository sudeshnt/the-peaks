import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ collapsed }) => (collapsed ? '#09357B' : '#2153A3')};
  padding: 5px 10px;
  border-radius: 4px 4px 0 0;

  .input-container {
    width: ${({ collapsed }) => (collapsed ? 0 : '200px')};
    transition: width 0.5s;

    input {
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
      background-color: ${({ collapsed }) => (collapsed ? '#09357B' : '#2153A3')};
      border: 0;
      outline: none;
      color: white;

      &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: white;
        opacity: ${({ collapsed }) => (collapsed ? 0 : 0.5)};
        transition: opacity 0.5s;
      }
    }
  }

  .search-button {
    cursor: pointer;
    background: transparent;
    border: none;

    &:hover {
      /* background: white; */
    }

    img {
      width: 20px;
    }
  }
`;

import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ collapsed, theme: { colors } }) => (
    collapsed ? colors.primary : colors.tertiary
  )};
  padding: 5px 10px;
  border-radius: 4px 4px 0 0;

  .input-container {
    width: ${({ collapsed }) => (collapsed ? 0 : '200px')};
    transition: width 0.5s;

    input {
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
      background-color: ${({ collapsed, theme: { colors } }) => (collapsed
    ? colors.primary : colors.tertiary
  )};
      border: 0;
      outline: none;
      color: ${({ theme }) => theme.colors.textSecondary};

      &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({ theme }) => theme.colors.textSecondary};
        opacity: ${({ collapsed }) => (collapsed ? 0 : 0.5)};
        transition: opacity 0.5s;
      }
    }
  }

  .search-button {
    cursor: pointer;
    background: transparent;
    border: none;

    img {
      width: 20px;
    }
  }
`;

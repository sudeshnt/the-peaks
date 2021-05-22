import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import images from 'assets/images';
import URLS from 'config/urls';

export const Styled = {
  SearchContainer: styled.div`
    display: flex;
    align-items: center;
    background-color: #2153A3;
    padding: 5px 10px;
    border-radius: 4px 4px 0 0;

    .input-container {
      width: ${({ collapsed }) => (collapsed ? 0 : '200px')};
      transition: width 0.5s;

      input {
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
        background-color: #2153A3;
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
  `,
};

const SearchBox = () => {
  const history = useHistory();
  const location = useLocation();

  const [searchCollapsed, setSearchCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { SearchContainer } = Styled;

  useEffect(() => {
    const { q } = queryString.parse(location.search);
    setSearchQuery(q || '');
    if (q) {
      if (searchCollapsed) {
        setSearchCollapsed(false);
      }
    }
  }, [location.search]);

  const onEnterSearchQuery = (query) => {
    setSearchQuery(query);
    history.replace({
      pathname: URLS.SEARCH,
      search: `?q=${encodeURIComponent(query)}`,
    });
  };

  const onPress = () => {
    if (!searchCollapsed) {
      setSearchQuery('');
      if (location.pathname !== URLS.HOME) {
        history.push(URLS.HOME);
      }
    }
    setSearchCollapsed(!searchCollapsed);
  };

  return (
    <SearchContainer collapsed={searchCollapsed}>
      <div className="input-container">
        <input
          placeholder="Search all news"
          value={searchQuery}
          onChange={(e) => onEnterSearchQuery(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="search-button"
        onClick={onPress}
      >
        {
          searchCollapsed ? <img src={images.searchIcon} alt="" />
            : <img src={images.crossIcon} alt="" />
        }
      </button>
    </SearchContainer>
  );
};

export default SearchBox;

import queryString from 'query-string';
import { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import images from 'assets/images';
import URLS from 'config/urls';
import useDebounce from 'hooks/useDebounce';
import useOutsideClickDetector from 'hooks/useOutsideAlerter';

export const Styled = {
  SearchContainer: styled.div`
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
  `,
};

const SearchBox = () => {
  const history = useHistory();
  const location = useLocation();
  const [searchCollapsed, setSearchCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const searchBoxRef = useRef();
  const inputRef = useRef();
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  useOutsideClickDetector(searchBoxRef, () => {
    if (searchCollapsed) {
      setSearchCollapsed(true);
    }
  });
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

  useEffect(
    () => {
      if (debouncedSearchQuery) {
        history.replace({
          pathname: URLS.SEARCH,
          search: `?q=${encodeURIComponent(debouncedSearchQuery)}`,
        });
      }
    },
    [debouncedSearchQuery],
  );

  const onEnterSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const onPress = () => {
    if (!searchCollapsed) {
      setSearchQuery('');
      if (location.pathname !== URLS.HOME) {
        history.push(URLS.HOME);
      }
    } else {
      inputRef.current.focus();
    }
    setSearchCollapsed(!searchCollapsed);
  };

  return (
    <SearchContainer ref={searchBoxRef} collapsed={searchCollapsed}>
      <div className="input-container">
        <input
          ref={inputRef}
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

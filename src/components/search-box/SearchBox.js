import queryString from 'query-string';
import { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SearchContainer } from './styled';
import images from 'assets/images';
import URLS from 'config/urls';
import useDebounce from 'hooks/useDebounce';
import useOutsideClickDetector from 'hooks/useOutsideAlerter';

const SearchBox = () => {
  const history = useHistory();
  const location = useLocation();
  const [searchCollapsed, setSearchCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const searchBoxRef = useRef();
  const inputRef = useRef();
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useOutsideClickDetector(searchBoxRef, () => {
    setSearchCollapsed(true);
  });

  useEffect(() => {
    const { q } = queryString.parse(location.search);
    setSearchQuery(q || '');
    if (q) {
      if (searchCollapsed) {
        setSearchCollapsed(false);
        inputRef.current.focus();
      }
    }
  }, [location.search]);

  const initialRender = useRef(true);
  useEffect(
    () => {
      if (initialRender.current) {
        initialRender.current = false;
        return;
      }
      if (location.pathname === URLS.SEARCH) {
        history.replace({
          pathname: URLS.SEARCH,
          search: `?q=${encodeURIComponent(debouncedSearchQuery)}`,
        });
      } else if (debouncedSearchQuery) {
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
      if (location.pathname === URLS.SEARCH) {
        history.replace({
          pathname: URLS.SEARCH,
          search: '?q=',
        });
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

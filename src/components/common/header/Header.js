import { useEffect, useState } from 'react';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import URLS from 'config/urls';
import { SearchButton, SearchInput, StyledLogo } from './styles';

const Header = () => {
  const history = useHistory();
  const location = useLocation();

  const [searchInputVisible, setSearchInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const { q } = queryString.parse(location.search);
    setSearchQuery(q || '');
    if (q) {
      if (!searchInputVisible) {
        setSearchInputVisible(true);
      }
    }
  }, [location.search]);

  const onEnterSearchQuery = (query) => {
    history.replace({
      pathname: URLS.SEARCH,
      search: `?q=${query}`,
    });
  };

  const onClickLogo = () => {
    history.push(URLS.HOME);
  };

  return (
    <header className="app-header">
      <div className="header-logo">
        <StyledLogo onClick={onClickLogo}>
          <span>The</span>
          <span>Peaks</span>
        </StyledLogo>
      </div>
      <div className="search-box">
        {
          searchInputVisible
            ? (
              <SearchInput>
                <input
                  placeholder="Search all news"
                  value={searchQuery}
                  onChange={(e) => onEnterSearchQuery(e.target.value)}
                />
                {/* <FontAwesomeIcon icon={faSearch}
                 color="white" style={{ margin: '0 15px' }}/> */}
              </SearchInput>
            )
            : (
              <SearchButton onClick={() => setSearchInputVisible(!searchInputVisible)}>
                {/* <FontAwesomeIcon icon={faSearch}
                color="white" style={{ margin: '10px 20px' }}/> */}
              </SearchButton>
            )
        }
      </div>
    </header>
  );
};

export default withRouter(Header);

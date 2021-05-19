import { useState } from 'react';
import { SearchButton, SearchInput, StyledLogo } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const [ searchInputVisible, setSearchInputVisible ] = useState(false)

  return (
    <header className="app-header">
      <div className="header-logo">
          <StyledLogo />
      </div>
      <div className="search-box">
        {
          searchInputVisible ? 
            <SearchInput>
              <input />
              <FontAwesomeIcon icon={faSearch} color="white" style={{ margin: '0 15px' }}/>
            </SearchInput>
          : <SearchButton onClick={() => setSearchInputVisible(!searchInputVisible)}>
              <FontAwesomeIcon icon={faSearch} color="white" style={{ margin: '10px 20px' }}/>
            </SearchButton>
        }
      </div>
    </header>
  )
};

export default Header;
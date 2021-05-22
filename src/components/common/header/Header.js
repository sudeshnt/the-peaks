import { useHistory } from 'react-router-dom';
import { StyledLogo } from './styles';
import SearchBox from 'components/common/search-box/SearchBox';
import URLS from 'config/urls';

const Header = () => {
  const history = useHistory();

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
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;

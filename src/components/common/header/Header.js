import { useHistory } from 'react-router-dom';
import { StyledLogo } from './styled';
import images from 'assets/images';
import SearchBox from 'components/common/search-box/SearchBox';
import URLS from 'config/urls';

const Header = () => {
  const history = useHistory();

  const onClickLogo = () => {
    history.push(URLS.HOME);
  };

  return (
    <header className="app-header">
      <div className="content">
        <div className="header-logo">
          <StyledLogo src={images.logo} onClick={onClickLogo} />
        </div>
        <div className="search-box">
          <SearchBox />
        </div>
      </div>
    </header>
  );
};

export default Header;

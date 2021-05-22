import { useHistory, useLocation } from 'react-router-dom';
import { RightContainer } from './styles';
import images from 'assets/images';
import Button from 'components/common/button/Button';
import URLS from 'config/urls';

const SubHeader = ({
  title,
}) => {
  const history = useHistory();
  const location = useLocation();

  const onClickBookmarksButton = () => {
    history.push(URLS.BOOKMARKS);
  };

  return (
    <div className="app-sub-header">
      <h1>{title}</h1>
      <RightContainer>
        {
          location.pathname !== URLS.BOOKMARKS
          && (
          <Button
            title="view bookmarks"
            icon={images.bookmarkOnIcon}
            onClick={onClickBookmarksButton}
          />
          )
        }
        <select defaultValue="Apples">
          <option>Newest First</option>
          <option>Oldest First</option>
        </select>
      </RightContainer>
    </div>
  );
};

export default SubHeader;

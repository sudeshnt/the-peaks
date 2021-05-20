import { RightContainer } from "./styles"
import { useHistory, useLocation } from 'react-router'
import URLS from '../../../config/urls'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Button from "../button/Button";

const SubHeader = ({
  title
}) => {
  const history = useHistory();
  const location = useLocation()

  const onClickBookmarksButton = () => {
    history.push(URLS.BOOKMARKS);
  }

  return (
    <div className="app-sub-header">
      <h1>{title}</h1>
      <RightContainer>
        {
          location.pathname !== URLS.BOOKMARKS &&
          <Button 
            title='view bookmarks'
            icon={faBookmark}
            onClick={onClickBookmarksButton} />
        }
        <select defaultValue="Apples">
          <option>Newest First</option>
          <option>Oldest First</option>
        </select>
      </RightContainer>
    </div>
  )
}

export default SubHeader;
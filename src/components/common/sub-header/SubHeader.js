import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BookMarksButton, RightContainer } from "./styles"
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { useHistory, useLocation } from 'react-router'
import URLS from '../../../config/urls'

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
          <BookMarksButton className="btn" onClick={onClickBookmarksButton}>
            <FontAwesomeIcon icon={faBookmark} color="white" />
            <span>view bookmark</span>
          </BookMarksButton>
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
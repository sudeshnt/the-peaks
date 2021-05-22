import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { RightContainer } from './styles';
import AppContext from 'AppContext';
import images from 'assets/images';
import Button from 'components/common/button/Button';
import { SortOrders, StorageKeys } from 'config/shared';
import URLS from 'config/urls';

const SubHeader = ({
  title,
}) => {
  const history = useHistory();
  const location = useLocation();
  const { sortOrder, setSortOrder } = useContext(AppContext);

  const onClickBookmarksButton = () => {
    history.push(URLS.BOOKMARKS);
  };

  const onOrderChanged = (e) => {
    const order = e.target.value;
    localStorage.setItem(StorageKeys.SORT_ORDER, order);
    setSortOrder(order);
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
        <select value={sortOrder} onChange={onOrderChanged}>
          {
            Object.entries(SortOrders).map(([key, order]) => (
              <option key={key} value={order.key}>{order.name}</option>
            ))
          }
        </select>
      </RightContainer>
    </div>
  );
};

export default SubHeader;

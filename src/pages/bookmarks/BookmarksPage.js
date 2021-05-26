import _ from 'lodash';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookmarkContainer, BookmarksContainer } from './styled';
import AppContext from 'AppContext';
import images from 'assets/images';
import Article from 'components/article/Article';
import EmptyResults from 'components/common/empty-results/EmptyResults';
import Loader from 'components/common/loader/Loader';
import SubHeader from 'components/common/sub-header/SubHeader';
import { sortBookmarks } from 'state/bookmark/actions';
import { fetchBookmarks } from 'state/bookmark/thunk';

const Bookmarkspage = () => {
  const dispatch = useDispatch();
  const { items: bookmarks, loading } = useSelector((state) => state.bookmark);
  const { sortOrder } = useContext(AppContext);

  useEffect(() => {
    if (_.isEmpty(bookmarks)) {
      dispatch(fetchBookmarks());
    }
  }, []);

  useEffect(() => {
    dispatch(sortBookmarks(sortOrder));
  }, [bookmarks, sortOrder]);

  return (
    <div className="page-content">
      <SubHeader title="All Bookmarks" />
      <section>
        { loading && <Loader /> }
        <BookmarksContainer>
          {bookmarks.length > 0
            ? (bookmarks?.map((article, index) => (
              <BookmarkContainer key={article.id}>
                <Article
                  article={article}
                  index={index}
                />
              </BookmarkContainer>
            ))) : (
              <EmptyResults text="No bookmarks found" icon={images.bookmarksEmpty} />
            )}
        </BookmarksContainer>
      </section>
    </div>
  );
};

export default Bookmarkspage;
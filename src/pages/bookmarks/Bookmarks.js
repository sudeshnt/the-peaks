import _ from 'lodash';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AppContext from 'AppContext';
import Article from 'components/article/Article';
import Loader from 'components/common/loader/Loader';
import SubHeader from 'components/common/sub-header/SubHeader';
import { sortBookmarks } from 'state/bookmark/actions';
import { fetchBookmarks } from 'state/bookmark/thunk';

const Bookmarks = () => {
  const { BookmarksContainer, BookmarkContainer } = Styled;
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
          {
            bookmarks?.map((article, index) => (
              <BookmarkContainer key={article.id}>
                <Article
                  article={article}
                  index={index}
                />
              </BookmarkContainer>
            ))
          }
        </BookmarksContainer>
      </section>
    </div>
  );
};

const Styled = {
  BookmarksContainer: styled.div`
    display:flex;
    flex-wrap: wrap;
    width: auto;
    justify-content: center;
  `,
  BookmarkContainer: styled.div`
    flex: 1 0 350px;
    padding: 10px;
    max-width: 350px;
  `,
};

export default Bookmarks;

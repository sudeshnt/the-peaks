import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';
import SubHeader from 'components/common/sub-header/SubHeader';
import { fetchBookmarks } from 'state/bookmark/thunk';
import Loader from 'components/common/loader/Loader';
import Article from 'components/article/Article';
import { ArticleTypes } from 'config/shared';

const Bookmarks = () => {
  const { BookmarksContainer, BookmarkContainer } = Styled;
  const dispatch = useDispatch();
  const { items: bookmarks, loading } = useSelector((state) => state.bookmark);

  useEffect(() => {
    if (_.isEmpty(bookmarks)) {
      dispatch(fetchBookmarks());
    }
  }, []);

  return (
    <div className="page-content">
      <SubHeader title="All Bookmarks" />
      <section>
        { loading && <Loader /> }
        <BookmarksContainer>
          {
            bookmarks?.map((article) => (
              <BookmarkContainer key={article.id}>
                <Article
                  type={ArticleTypes.WITH_TITLE_AND_THUMBNAIL}
                  article={article}
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
  `,
  BookmarkContainer: styled.div`
    flex: 1 0 350px;
    padding: 10px;
    height: 350px;
    max-width: 350px;
  `,
};

export default Bookmarks;

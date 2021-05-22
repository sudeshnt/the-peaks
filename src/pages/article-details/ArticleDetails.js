import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import * as newsApi from 'api/news';
import images from 'assets/images';
import Button from 'components/common/button/Button';
import { addBookmark, fetchBookmarks, removeBookmark } from 'state/bookmark/thunk';

const Article = () => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [bookmarkedStatus, setBookmarkedStatus] = useState(false);

  const bookmarks = useSelector((state) => state.bookmark.items);
  const decodedArticleId = useMemo(() => decodeURIComponent(articleId), [articleId]);

  useEffect(() => {
    fetchArticleDetails(decodedArticleId);
    if (!bookmarks?.length) {
      dispatch(fetchBookmarks());
    }
    // eslint-disable-next-line
  }, [decodedArticleId]);

  useEffect(() => {
    getBookmarkStatus();
    // eslint-disable-next-line
  }, [bookmarks]);

  const fetchArticleDetails = async (id) => {
    try {
      const articleDetails = await newsApi.newsDetails(id);
      setArticle(articleDetails?.data?.response?.content);
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  };

  const getBookmarkStatus = () => {
    const bookmarked = bookmarks?.some((bookmark) => (
      bookmark.id === decodedArticleId
    ));
    setBookmarkedStatus(bookmarked);
  };

  const onAddBookmark = () => {
    dispatch(addBookmark(article));
    setBookmarkedStatus(true);
  };

  const onRemoveBookmark = () => {
    dispatch(removeBookmark(decodedArticleId));
    setBookmarkedStatus(false);
  };

  return (
    <div className="page-content">
      <section>
        {
          article
          && (
          <Styled.NewsContainer>
            <div className="text-section">
              {
                bookmarkedStatus ? (
                  <Button
                    title="remove bookmark"
                    icon={images.bookmarkOnIcon}
                    onClick={onRemoveBookmark}
                  />
                )
                  : (
                    <Button
                      title="add bookmark"
                      icon={images.bookmarkOffIcon}
                      onClick={onAddBookmark}
                    />
                  )
              }

              <h1>{article.webTitle}</h1>
              <h3>{article.webTitle}</h3>
              <hr />
              <div dangerouslySetInnerHTML={{
                __html: article.fields?.body,
              }}
              />
            </div>
            <div className="image-section">
              <img src={article.fields?.thumbnail} alt="" />
            </div>
          </Styled.NewsContainer>
          )
        }
      </section>
    </div>
  );
};

const Styled = {
  NewsContainer: styled.div`
    display: flex;
    flex-wrap: wrap;

    .text-section {
      flex: 2;
      flex-direction: column;

      h1, h2 {
        font-weight: 700;
        letter-spacing: 0.07px;
      }

      h1 {
        font-size: 34px;
        line-height: 39px;
      }

      h2 {
        font-size: 20px;
        line-height: 26px;
      }

      img {
        width: 100%;
      }
    }
    
    .image-section {
      flex: 1;
      align-items: center;
      padding-left: 50px;

      img {
        width: 100%;
        height: 300px;
      }
    }
  `,
};

export default Article;

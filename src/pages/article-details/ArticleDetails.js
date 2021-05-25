import _ from 'lodash';
import moment from 'moment';
import {
  useEffect, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NewsContainer } from './styled';
import * as newsApi from 'api/news';
import images from 'assets/images';
import Button from 'components/common/button/Button';
import Toast, { Toasts } from 'components/common/toast/Toast';
import { DaysOfWeek } from 'config/shared';
import { addBookmark, fetchBookmarks, removeBookmark } from 'state/bookmark/thunk';

const Article = () => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [bookmarkedStatus, setBookmarkedStatus] = useState(false);
  const [toast, setToast] = useState({
    ...Toasts.BOOKMARK_ADDED,
  });

  const bookmarks = useSelector((state) => state.bookmark.items);
  const decodedArticleId = useMemo(() => decodeURIComponent(articleId), [articleId]);

  useEffect(() => {
    fetchArticleDetails(decodedArticleId);
    if (_.isEmpty(bookmarks)) {
      dispatch(fetchBookmarks());
    }
    // eslint-disable-next-line
  }, [decodedArticleId]);

  useEffect(() => {
    getBookmarkStatus();
  }, [bookmarks]);

  const fetchArticleDetails = async (id) => {
    try {
      const response = await newsApi.newsDetails(id);
      let articleDetails = response?.data?.response?.content;
      articleDetails = {
        ...articleDetails,
        formattedDate: formatPublicationDate(
          moment(articleDetails.webPublicationDate),
        ),
      };
      setArticle(articleDetails);
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
    showToast(Toasts.BOOKMARK_ADDED);
  };

  const onRemoveBookmark = () => {
    dispatch(removeBookmark(decodedArticleId));
    setBookmarkedStatus(false);
    showToast(Toasts.BOOKMARK_REMOVED);
  };

  const showToast = (type) => {
    setToast({ visible: true, ...type });
    setTimeout(() => {
      setToast({ visible: false, ...type });
    }, 2900);
  };

  const formatPublicationDate = (webPublicationMoment) => {
    const weekDay = DaysOfWeek[webPublicationMoment.weekday()];
    return `${weekDay} ${webPublicationMoment.format('DD MMM YYYY HH.mm Z')}`;
  };

  return (
    <div className="page-content">
      <section>
        {
          article
          && (
          <NewsContainer>
            {
              bookmarkedStatus ? (
                <Button
                  title="remove bookmark"
                  icon={images.bookmarkOnIcon}
                  onClick={onRemoveBookmark}
                  disabled={toast.visible}
                />
              ) : (
                <Button
                  title="add bookmark"
                  icon={images.bookmarkOffIcon}
                  onClick={onAddBookmark}
                  disabled={toast.visible}
                />
              )
            }
            <p className="publication-date">{article.formattedDate}</p>
            <h1>{article.webTitle}</h1>
            {article.fields?.headline && <h3>{article.fields.headline}</h3>}
            <div className="body">
              <div className="article">
                <hr />
                <div dangerouslySetInnerHTML={{
                  __html: article.fields?.body,
                }}
                />
              </div>
              {
                article.fields?.thumbnail && (
                  <div className="image">
                    <img src={article.fields?.thumbnail} alt="" />
                    <p>
                      {article.fields?.trailText}
                    </p>
                  </div>
                )
              }
            </div>
            <Toast {...toast} />
          </NewsContainer>
          )
        }
      </section>
    </div>
  );
};

export default Article;

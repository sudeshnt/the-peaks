import _ from 'lodash';
import moment from 'moment';
import { rgba } from 'polished';
import {
  useEffect, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import * as newsApi from 'api/news';
import images from 'assets/images';
import Button from 'components/common/button/Button';
import { DaysOfWeek } from 'config/shared';
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
        webPublicationDate: formatPublicationDate(
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
  };

  const onRemoveBookmark = () => {
    dispatch(removeBookmark(decodedArticleId));
    setBookmarkedStatus(false);
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
          <Styled.NewsContainer>
            {
              bookmarkedStatus ? (
                <Button
                  title="remove bookmark"
                  icon={images.bookmarkOnIcon}
                  onClick={onRemoveBookmark}
                />
              ) : (
                <Button
                  title="add bookmark"
                  icon={images.bookmarkOffIcon}
                  onClick={onAddBookmark}
                />
              )
            }
            <p className="publication-date">{article.webPublicationDate}</p>
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
          </Styled.NewsContainer>
          )
        }
      </section>
    </div>
  );
};

const Styled = {
  NewsContainer: styled.div`

    .publication-date {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 14px;
      line-height: 31px;
      letter-spacing: 0.83px;
    }

    h1, h2, h3 {
      font-weight: 700;
      letter-spacing: 0.07px;
      margin: 0 0 10px 0;
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
      height: auto;
    }

    hr {
      border-top: 1px solid ${rgba('#979797', 0.1)};
    }

    .body {
      display: flex;
      flex-wrap: wrap;

      .article {
        flex: 2;
        flex-direction: column;
      }
      
      .image {
        flex: 1 0 300px;
        align-items: center;
        padding: 8px 0 0 2.5rem;

        img {
          width: 100%;
          height: auto;
        }

        p {
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
  `,
};

export default Article;

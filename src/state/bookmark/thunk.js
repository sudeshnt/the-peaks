import {
  addBookmarkFailure,
  addBookmarkInProgress,
  addBookmarkSuccess,
  fetchBookmarksFailure,
  fetchBookmarksInProgress,
  fetchBookmarksSuccess,
  removeBookmarkFailure,
  removeBookmarkInProgress,
  removeBookmarkSuccess,
} from './actions';
import { StorageKeys } from 'config/shared';

export const fetchBookmarks = () => (dispatch) => {
  try {
    dispatch(fetchBookmarksInProgress());
    const bookMarks = localStorage.getItem(StorageKeys.BOOKMARKS);
    dispatch(fetchBookmarksSuccess(bookMarks ? JSON.parse(bookMarks) : []));
  } catch (e) {
    dispatch(fetchBookmarksFailure(e));
  }
};

export const addBookmark = (article) => (dispatch, getState) => {
  try {
    dispatch(addBookmarkInProgress());
    const { bookmark } = getState();
    const bookmarks = [
      ...(bookmark.items ?? []),
      article,
    ];
    localStorage.setItem(StorageKeys.BOOKMARKS, JSON.stringify(bookmarks));
    dispatch(addBookmarkSuccess(bookmarks));
  } catch (e) {
    dispatch(addBookmarkFailure(e));
  }
};

export const removeBookmark = (articleId) => (dispatch, getState) => {
  try {
    dispatch(removeBookmarkInProgress());
    const { bookmark } = getState();
    const bookmarks = bookmark.items?.filter(
      (bookmarkedArticle) => bookmarkedArticle.id !== articleId,
    );
    localStorage.setItem(StorageKeys.BOOKMARKS, JSON.stringify(bookmarks));
    dispatch(removeBookmarkSuccess(bookmarks));
  } catch (e) {
    dispatch(removeBookmarkFailure(e));
  }
};

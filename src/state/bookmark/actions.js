import {
  FETCH_BOOKMARKS_IN_PROGRESS,
  FETCH_BOOKMARKS_SUCCESS,
  FETCH_BOOKMARKS_ERROR,

  ADD_BOOKMARK_IN_PROGRESS,
  ADD_BOOKMARK_SUCCESS,
  ADD_BOOKMARK_ERROR,

  REMOVE_BOOKMARK_IN_PROGRESS,
  REMOVE_BOOKMARK_SUCCESS,
  REMOVE_BOOKMARK_ERROR,
} from './types';

export const fetchBookmarksInProgress = () => ({
  type: FETCH_BOOKMARKS_IN_PROGRESS,
});

export const fetchBookmarksSuccess = (bookmarks) => ({
  type: FETCH_BOOKMARKS_SUCCESS,
  payload: bookmarks,
});

export const fetchBookmarksFailure = (error) => ({
  type: FETCH_BOOKMARKS_ERROR,
  payload: error,
});

export const addBookmarkInProgress = () => ({
  type: ADD_BOOKMARK_IN_PROGRESS,
});

export const addBookmarkSuccess = (bookmarks) => ({
  type: ADD_BOOKMARK_SUCCESS,
  payload: bookmarks,
});

export const addBookmarkFailure = (error) => ({
  type: ADD_BOOKMARK_ERROR,
  payload: error,
});

export const removeBookmarkInProgress = () => ({
  type: REMOVE_BOOKMARK_IN_PROGRESS,
});

export const removeBookmarkSuccess = (bookmarks) => ({
  type: REMOVE_BOOKMARK_SUCCESS,
  payload: bookmarks,
});

export const removeBookmarkFailure = (error) => ({
  type: REMOVE_BOOKMARK_ERROR,
  payload: error,
});

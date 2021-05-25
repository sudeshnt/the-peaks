import {
  RESET_SEARCH_NEWS,
  SEARCH_NEWS_ERROR,
  SEARCH_NEWS_IN_PROGRESS,
  SEARCH_NEWS_SUCCESS,
  SET_LOADING,
} from './types';

export const searchNewsInProgress = () => ({
  type: SEARCH_NEWS_IN_PROGRESS,
});

export const searchNewsSuccess = (searchResults) => ({
  type: SEARCH_NEWS_SUCCESS,
  payload: searchResults,
});

export const searchNewsFailure = (error) => ({
  type: SEARCH_NEWS_ERROR,
  payload: error,
});

export const resetSearchNews = () => ({
  type: RESET_SEARCH_NEWS,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

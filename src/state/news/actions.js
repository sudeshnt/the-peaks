import {
  FETCH_SECTION_NEWS_ERROR,
  FETCH_SECTION_NEWS_IN_PROGRESS,
  FETCH_SECTION_NEWS_SUCCESS,
  FETCH_TOP_NEWS_ERROR,
  FETCH_TOP_NEWS_IN_PROGRESS,
  FETCH_TOP_NEWS_SUCCESS,
} from './types';

export const fetchTopNewsInProgress = () => ({
  type: FETCH_TOP_NEWS_IN_PROGRESS,
});

export const fetchTopNewsSuccess = (articles) => ({
  type: FETCH_TOP_NEWS_SUCCESS,
  payload: articles,
});

export const fetchTopNewsFailure = (error) => ({
  type: FETCH_TOP_NEWS_ERROR,
  payload: error,
});

export const fetchSectionNewsInProgress = () => ({
  type: FETCH_SECTION_NEWS_IN_PROGRESS,
});

export const fetchSectionNewsSuccess = (articles) => ({
  type: FETCH_SECTION_NEWS_SUCCESS,
  payload: articles,
});

export const fetchSectionNewsFailure = (error) => ({
  type: FETCH_SECTION_NEWS_ERROR,
  payload: error,
});

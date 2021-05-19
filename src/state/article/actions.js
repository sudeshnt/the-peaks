import {
  FETCH_TOP_NEWS_IN_PROGRESS,
  FETCH_TOP_NEWS_SUCCESS,
  FETCH_TOP_NEWS_ERROR,
  FETCH_SPORTS_NEWS_IN_PROGRESS,
  FETCH_SPORTS_NEWS_SUCCESS,
  FETCH_SPORTS_NEWS_ERROR
} from "./types";

export const fetchTopNewsInProgress = () => ({
  type: FETCH_TOP_NEWS_IN_PROGRESS
})

export const fetchTopNewsSuccess = articles => ({
  type: FETCH_TOP_NEWS_SUCCESS,
  payload: articles
})

export const fetchTopNewsFailure = error => ({
  type: FETCH_TOP_NEWS_ERROR,
  payload: error
})


export const fetchSportsNewsInProgress = () => ({
  type: FETCH_SPORTS_NEWS_IN_PROGRESS
})

export const fetchSportsNewsSuccess = articles => ({
  type: FETCH_SPORTS_NEWS_SUCCESS,
  payload: articles
})

export const fetchSportsNewsFailure = error => ({
  type: FETCH_SPORTS_NEWS_ERROR,
  payload: error
})

import {
  fetchSectionNewsFailure,
  fetchSectionNewsInProgress,
  fetchSectionNewsSuccess,
  fetchTopNewsFailure,
  fetchTopNewsInProgress,
  fetchTopNewsSuccess,
  resetSearchNews,
  searchNewsFailure,
  searchNewsInProgress,
  searchNewsSuccess,
} from './actions';
import * as newsApi from 'api/news';
import { NewsSections } from 'api/utils';

export const fetchTopNews = (sortOrder) => async (dispatch) => {
  try {
    dispatch(fetchTopNewsInProgress());
    const response = await newsApi.fetchSection(NewsSections.NEWS, sortOrder, 8);
    dispatch(fetchTopNewsSuccess(response?.data?.response?.results));
  } catch (e) {
    dispatch(fetchTopNewsFailure(e));
  }
};

export const fetchSectionNews = (sortOrder) => async (dispatch) => {
  try {
    dispatch(fetchSectionNewsInProgress());
    const sportNews = await newsApi.fetchSection(NewsSections.SPORT, sortOrder, 6);
    const cultureNews = await newsApi.fetchSection(NewsSections.CULTURE, sortOrder, 6);
    const lifeStyleNews = await newsApi.fetchSection(NewsSections.LIFE_STYLE, sortOrder, 6);
    dispatch(fetchSectionNewsSuccess({
      sportNews: sportNews?.data?.response,
      cultureNews: cultureNews?.data?.response,
      lifeStyleNews: lifeStyleNews?.data?.response,
    }));
  } catch (e) {
    dispatch(fetchSectionNewsFailure(e));
  }
};

export const searchNews = (query, sortOrder, page, pageSize, reset) => async (dispatch) => {
  try {
    if (reset) {
      dispatch(resetSearchNews());
    }
    dispatch(searchNewsInProgress());
    const response = await newsApi.searchNews(query, sortOrder, page, pageSize);
    dispatch(searchNewsSuccess({
      articles: response?.data?.response?.results,
      total: response?.data?.response?.total,
    }));
  } catch (e) {
    dispatch(searchNewsFailure(e));
  }
};

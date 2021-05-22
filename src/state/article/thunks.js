import {
  fetchSectionNewsFailure,
  fetchSectionNewsInProgress,
  fetchSectionNewsSuccess,
  fetchTopNewsFailure,
  fetchTopNewsInProgress,
  fetchTopNewsSuccess,
  searchNewsFailure,
  searchNewsInProgress,
  searchNewsSuccess,
} from './actions';
import * as newsApi from 'api/news';

export const fetchTopNews = (sortOrder) => async (dispatch) => {
  try {
    dispatch(fetchTopNewsInProgress());
    const response = await newsApi.fetchSection('news', sortOrder, 8);
    dispatch(fetchTopNewsSuccess(response?.data?.response?.results));
  } catch (e) {
    dispatch(fetchTopNewsFailure(e));
  }
};

export const fetchSectionNews = (sortOrder) => async (dispatch) => {
  try {
    dispatch(fetchSectionNewsInProgress());
    const sportNews = await newsApi.fetchSection('sport', sortOrder, 6);
    const cultureNews = await newsApi.fetchSection('culture', sortOrder, 6);
    const lifeStyleNews = await newsApi.fetchSection('lifeandstyle', sortOrder, 6);
    dispatch(fetchSectionNewsSuccess({
      sportNews: sportNews?.data?.response,
      cultureNews: cultureNews?.data?.response,
      lifeStyleNews: lifeStyleNews?.data?.response,
    }));
  } catch (e) {
    dispatch(fetchSectionNewsFailure(e));
  }
};

export const searchNews = (query, sortOrder) => async (dispatch) => {
  try {
    dispatch(searchNewsInProgress());
    const response = await newsApi.searchNews(query, sortOrder, 15);
    dispatch(searchNewsSuccess(response?.data?.response?.results));
  } catch (e) {
    dispatch(searchNewsFailure(e));
  }
};

import * as newsApi from 'api/news';
import {
  fetchTopNewsInProgress,
  fetchTopNewsSuccess,
  fetchTopNewsFailure,
  fetchSectionNewsInProgress,
  fetchSectionNewsSuccess,
  fetchSectionNewsFailure,
  searchNewsInProgress,
  searchNewsSuccess,
  searchNewsFailure,
} from './actions';

export const fetchTopNews = () => async (dispatch) => {
  try {
    dispatch(fetchTopNewsInProgress());
    const response = await newsApi.fetchSection('news', 8);
    dispatch(fetchTopNewsSuccess(response?.data?.response?.results));
  } catch (e) {
    dispatch(fetchTopNewsFailure(e));
  }
};

export const fetchSectionNews = () => async (dispatch) => {
  try {
    dispatch(fetchSectionNewsInProgress());
    const sportNews = await newsApi.fetchSection('sport', 6);
    const cultureNews = await newsApi.fetchSection('culture', 6);
    const lifeStyleNews = await newsApi.fetchSection('lifeandstyle', 6);
    dispatch(fetchSectionNewsSuccess({
      sportNews: sportNews?.data?.response,
      cultureNews: cultureNews?.data?.response,
      lifeStyleNews: lifeStyleNews?.data?.response,
    }));
  } catch (e) {
    dispatch(fetchSectionNewsFailure(e));
  }
};

export const searchNews = (query, pagination) => async (dispatch) => {
  // eslint-disable-next-line
  console.log(pagination);
  try {
    dispatch(searchNewsInProgress());
    const response = await newsApi.searchNews(query, 15);
    dispatch(searchNewsSuccess(response?.data?.response?.results));
  } catch (e) {
    dispatch(searchNewsFailure(e));
  }
};

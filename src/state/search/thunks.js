import {
  resetSearchNews,
  searchNewsFailure,
  searchNewsInProgress,
  searchNewsSuccess,
} from './actions';
import * as newsApi from 'api/news';

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

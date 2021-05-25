import {
  fetchSectionNewsFailure,
  fetchSectionNewsInProgress,
  fetchSectionNewsSuccess,
  fetchTopNewsFailure,
  fetchTopNewsInProgress,
  fetchTopNewsSuccess,
} from './actions';
import * as newsApi from 'api/news';
import { ArticlesPerSection, NewsSections, TopStoriesCount } from 'api/utils';

export const fetchTopNews = (sortOrder) => async (dispatch) => {
  try {
    dispatch(fetchTopNewsInProgress());
    const response = await newsApi.fetchSection(NewsSections.NEWS, sortOrder, TopStoriesCount);
    dispatch(fetchTopNewsSuccess(response?.data?.response?.results));
  } catch (e) {
    dispatch(fetchTopNewsFailure(e));
  }
};

export const fetchSectionNews = (sortOrder) => async (dispatch) => {
  try {
    dispatch(fetchSectionNewsInProgress());
    const sportNews = await newsApi.fetchSection(
      NewsSections.SPORT, sortOrder, ArticlesPerSection,
    );
    const cultureNews = await newsApi.fetchSection(
      NewsSections.CULTURE, sortOrder, ArticlesPerSection,
    );
    const lifeStyleNews = await newsApi.fetchSection(
      NewsSections.LIFE_STYLE, sortOrder, ArticlesPerSection,
    );
    dispatch(fetchSectionNewsSuccess({
      sportNews: sportNews?.data?.response,
      cultureNews: cultureNews?.data?.response,
      lifeStyleNews: lifeStyleNews?.data?.response,
    }));
  } catch (e) {
    dispatch(fetchSectionNewsFailure(e));
  }
};

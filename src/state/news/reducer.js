import {
  FETCH_SECTION_NEWS_ERROR,
  FETCH_SECTION_NEWS_IN_PROGRESS,
  FETCH_SECTION_NEWS_SUCCESS,
  FETCH_TOP_NEWS_ERROR,
  FETCH_TOP_NEWS_IN_PROGRESS,
  FETCH_TOP_NEWS_SUCCESS,
} from './types';

const initialState = {
  topNews: [],
  topNewsLoading: false,
  sectionNews: {},
  sectionNewsLoading: false,
  error: null,
};

const NewsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TOP_NEWS_IN_PROGRESS:
      return {
        ...state,
        topNewsLoading: true,
        error: null,
      };
    case FETCH_SECTION_NEWS_IN_PROGRESS:
      return {
        ...state,
        sectionNewsLoading: true,
        error: null,
      };
    case FETCH_TOP_NEWS_SUCCESS:
      return {
        ...state,
        topNewsLoading: false,
        topNews: payload,
      };
    case FETCH_SECTION_NEWS_SUCCESS:
      return {
        ...state,
        sectionNewsLoading: false,
        sectionNews: payload,
      };
    case FETCH_TOP_NEWS_ERROR:
    case FETCH_SECTION_NEWS_ERROR:
    default:
      return state;
  }
};

export default NewsReducer;

import {
  FETCH_TOP_NEWS_IN_PROGRESS,
  FETCH_TOP_NEWS_SUCCESS,
  FETCH_TOP_NEWS_ERROR,
  FETCH_SECTION_NEWS_IN_PROGRESS,
  FETCH_SECTION_NEWS_SUCCESS,
  FETCH_SECTION_NEWS_ERROR,
  SEARCH_NEWS_IN_PROGRESS,
  SEARCH_NEWS_SUCCESS,
  SEARCH_NEWS_ERROR,
} from './types';

const initialState = {
  topNews: [],
  topNewsLoading: false,
  sectionNews: {},
  sectionNewsLoading: false,
  searchedNews: [],
  loading: false,
  error: null,
};

const ArticleReducer = (state = initialState, action) => {
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
    case SEARCH_NEWS_IN_PROGRESS:
      return {
        ...state,
        loading: true,
        items: [],
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
    case SEARCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: payload,
      };
    case FETCH_TOP_NEWS_ERROR:
    case FETCH_SECTION_NEWS_ERROR:
    case SEARCH_NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default ArticleReducer;

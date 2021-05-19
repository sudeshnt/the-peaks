import {
  FETCH_TOP_NEWS_IN_PROGRESS,
  FETCH_TOP_NEWS_SUCCESS,
  FETCH_TOP_NEWS_ERROR,
  FETCH_SPORTS_NEWS_IN_PROGRESS,
  FETCH_SPORTS_NEWS_SUCCESS,
  FETCH_SPORTS_NEWS_ERROR,
  SEARCH_NEWS_IN_PROGRESS,
  SEARCH_NEWS_SUCCESS,
  SEARCH_NEWS_ERROR
} from './types'

const initialState = {
  topNews: [],
  topNewsLoading: false,
  sportsNews: [],
  sportsNewsLoading: false,
  searchedNews: [],
  loading: false,
  error: null
}

const ArticleReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_TOP_NEWS_IN_PROGRESS:
      return {
        ...state,
        topNewsLoading: true,
        error: null
      };
    case FETCH_SPORTS_NEWS_IN_PROGRESS:
      return {
        ...state,
        sportsNewsLoading: true,
        error: null
      };
    case SEARCH_NEWS_IN_PROGRESS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_TOP_NEWS_SUCCESS:
      return {
        ...state,
        topNewsLoading: false,
        topNews: payload
      }
    case FETCH_SPORTS_NEWS_SUCCESS:
      return {
        ...state,
        sportsNewsLoading: false,
        sportsNews: payload
      }
    case SEARCH_NEWS_SUCCESS:
      return {
        ...state,
        searchedNews: false,
        items: payload
      }
    case FETCH_TOP_NEWS_ERROR:
    case FETCH_SPORTS_NEWS_ERROR:
    case SEARCH_NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state;
  }
}

export default ArticleReducer;
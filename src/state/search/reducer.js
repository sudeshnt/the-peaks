import _ from 'lodash';
import {
  RESET_SEARCH_NEWS,
  SEARCH_NEWS_ERROR,
  SEARCH_NEWS_IN_PROGRESS,
  SEARCH_NEWS_SUCCESS,
  SET_LOADING,
} from './types';

const initialState = {
  loading: false,
  searchResults: [],
  error: null,
  totalItems: 0,
};

const SearchReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_NEWS_IN_PROGRESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: _.concat(state.searchResults, payload.articles),
        totalItems: payload.total,
      };
    case SEARCH_NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        totalItems: 0,
      };
    case RESET_SEARCH_NEWS:
      return {
        ...state,
        searchResults: [],
        totalItems: 0,
      };
    default:
      return state;
  }
};

export default SearchReducer;

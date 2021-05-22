import {
  ADD_BOOKMARK_ERROR,
  ADD_BOOKMARK_IN_PROGRESS,
  ADD_BOOKMARK_SUCCESS,
  FETCH_BOOKMARKS_ERROR,
  FETCH_BOOKMARKS_IN_PROGRESS,
  FETCH_BOOKMARKS_SUCCESS,
  REMOVE_BOOKMARK_ERROR,
  REMOVE_BOOKMARK_IN_PROGRESS,
  REMOVE_BOOKMARK_SUCCESS,
  SORT_BOOKMARKS,
} from './types';
import { SortOrders } from 'config/shared';

const initialState = {
  bookmarks: [],
  loading: false,
  error: null,
};

const BookmarksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_BOOKMARKS_IN_PROGRESS:
    case ADD_BOOKMARK_IN_PROGRESS:
    case REMOVE_BOOKMARK_IN_PROGRESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BOOKMARKS_SUCCESS:
    case ADD_BOOKMARK_SUCCESS:
    case REMOVE_BOOKMARK_SUCCESS:
      return {
        ...state,
        loading: false,
        items: payload,
      };
    case FETCH_BOOKMARKS_ERROR:
    case ADD_BOOKMARK_ERROR:
    case REMOVE_BOOKMARK_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SORT_BOOKMARKS:
      return {
        ...state,
        items: state.items.sort((a, b) => {
          const sortOrder = payload;
          switch (sortOrder) {
            case SortOrders.OLDEST_FIRST.key:
              return new Date(b.webPublicationDate) - new Date(a.webPublicationDate);
            default:
              return new Date(a.webPublicationDate) - new Date(b.webPublicationDate);
          }
        }),
      };
    default:
      return state;
  }
};

export default BookmarksReducer;

import { combineReducers } from 'redux';
import bookmark from 'state/bookmark/reducer';
import news from 'state/news/reducer';
import search from 'state/search/reducer';

const rootReducer = combineReducers({
  news,
  search,
  bookmark,
});

export default rootReducer;

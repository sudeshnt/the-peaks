import { combineReducers } from 'redux';
import article from 'state/article/reducer';
import bookmark from 'state/bookmark/reducer';

const rootReducer = combineReducers({
  article,
  bookmark,
});

export default rootReducer;

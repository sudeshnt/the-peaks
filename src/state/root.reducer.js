import { combineReducers } from 'redux';
import article from './article/reducer';
import bookmark from './bookmark/reducer';

const rootReducer = combineReducers({
  article,
  bookmark,
});

export default rootReducer;

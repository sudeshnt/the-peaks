import { combineReducers } from 'redux';
import article from './article/reducer';

const rootReducer = combineReducers({
  article
})

export default rootReducer;
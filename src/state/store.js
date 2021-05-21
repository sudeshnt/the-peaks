import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root.reducer';

const enhancers = [];
if (process.env.NODE_ENV === 'development') {
  /* eslint no-underscore-dangle: 0 */
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    ...enhancers,
  ),
);

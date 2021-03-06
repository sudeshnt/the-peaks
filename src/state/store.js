import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'state/root.reducer';

const enhancers = [];
if (process.env.NODE_ENV === 'development') {
  /* eslint-disable-next-line no-underscore-dangle */
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

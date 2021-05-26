import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const renderWithStore = (
  ui,
  initialState = {
    news: {
      sectionNews: [],
    },
    search: {},
    bookmark: {},
  },
) => {
  const mockStore = getMockStore(initialState);
  return {
    ...render(
      <Provider store={mockStore}>
        {ui}
      </Provider>,
    ),
  };
};

const getMockStore = (initialState) => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  return mockStore(initialState);
};

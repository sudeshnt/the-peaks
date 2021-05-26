import { renderWithStore } from './utils/testing';
import App from 'App';

test('renders learn react link', () => {
  const { container } = renderWithStore(<App />);
  expect(container).not.toBeNull();
  expect(container.firstChild).toMatchSnapshot();
});

import axios from 'axios';
import { fetchSection } from '../news';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve()),
}));

jest.mock('../utils', () => ({
  getShowFields: jest.fn(),
  getQueryString: jest.fn(),
}));

describe('api/news', () => {
  it('fetchSection', () => {
    fetchSection('news', 'oldest', 12);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});

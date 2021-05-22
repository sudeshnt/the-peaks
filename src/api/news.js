import axios from 'axios';
import queryString from 'query-string';

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const commonFields = ['headline', 'thumbnail'];

export const getQueryString = (queryObj = {}) => {
  const queryObject = {
    ...queryObj,
    'api-key': process.env.REACT_APP_API_KEY,
  };
  return queryString.stringify(queryObject);
};

export const fetchSection = (section, sortOrder, count) => {
  const qs = getQueryString({
    'page-size': count,
    'show-fields': commonFields.join(','),
    'order-by': sortOrder,
  });
  return axios.get(`${baseUrl}/${section}?${qs}`);
};

export const searchNews = (query, sortOrder, count) => {
  const qs = getQueryString({
    q: query,
    'page-size': count,
    'show-fields': commonFields.join(','),
    'order-by': sortOrder,
  });
  return axios.get(`${baseUrl}/search?${qs}`);
};

export const newsDetails = (articleId) => {
  const qs = getQueryString({
    'show-fields': [...commonFields, 'body'].join(','),
  });
  return axios.get(`${baseUrl}/${articleId}?${qs}`);
};

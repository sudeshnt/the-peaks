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

export const fetchSection = (section, sortOrder, pageSize) => {
  const qs = getQueryString({
    'page-size': pageSize,
    'show-fields': commonFields.join(','),
    'order-by': sortOrder,
  });
  return axios.get(`${baseUrl}/${section}?${qs}`);
};

export const searchNews = (query, sortOrder, page, pageSize) => {
  const qs = getQueryString({
    q: query,
    page,
    'page-size': pageSize,
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

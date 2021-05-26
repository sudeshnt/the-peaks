import axios from 'axios';
import {
  getQueryString, getShowFields, ShowFields,
} from './utils';

export const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const apiKey = process.env.REACT_APP_API_KEY;

export const fetchSection = (section, sortOrder, pageSize) => {
  const qs = getQueryString({
    'page-size': pageSize,
    'show-fields': getShowFields(),
    'order-by': sortOrder,
    'api-key': apiKey,
  });
  return axios.get(`${baseUrl}/${section}?${qs}`);
};

export const searchNews = (query, sortOrder, page, pageSize) => {
  const qs = getQueryString({
    'q': query,
    'page': page,
    'page-size': pageSize,
    'show-fields': getShowFields(),
    'order-by': sortOrder,
    'api-key': apiKey,
  });
  return axios.get(`${baseUrl}/search?${qs}`);
};

export const newsDetails = (articleId) => {
  const qs = getQueryString({
    'show-fields': getShowFields([ShowFields.BODY, ShowFields.TRAIL_TEXT]),
    'show-elements': 'all',
    'api-key': apiKey,
  });
  return axios.get(`${baseUrl}/${articleId}?${qs}`);
};

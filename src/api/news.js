import axios from 'axios';
import {
  baseUrl, getQueryString, getShowFields, ShowFields,
} from './utils';

export const fetchSection = (section, sortOrder, pageSize) => {
  const qs = getQueryString({
    'page-size': pageSize,
    'show-fields': getShowFields(),
    'order-by': sortOrder,
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
  });
  return axios.get(`${baseUrl}/search?${qs}`);
};

export const newsDetails = (articleId) => {
  const qs = getQueryString({
    'show-fields': getShowFields([ShowFields.BODY, ShowFields.TRAIL_TEXT]),
    'show-elements': 'all',
  });
  return axios.get(`${baseUrl}/${articleId}?${qs}`);
};

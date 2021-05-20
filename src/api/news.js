import axios from "axios";
import queryString from "query-string"

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const commonFields = ['headline', 'thumbnail'];

export const getQueryString = (queryObj = {}) => {
  const queryObject = {
    ...queryObj,
    'api-key': process.env.REACT_APP_API_KEY
  };
  return queryString.stringify(queryObject);
}

export const fetchSection = (section, count) => {
  const queryString = getQueryString({
    'page-size': count,
    'show-fields': commonFields.join(',')
  })
  return axios.get(`${baseUrl}/${section}?${queryString}`)
}

export const searchNews = (query, count) => {
  const queryString = getQueryString({
    'q': query,
    'page-size': count,
    'show-fields': commonFields.join(',')
  })
  return axios.get(`${baseUrl}/search?${queryString}`)
}

export const newsDetails = articleId => {
  const queryString = getQueryString({
    'show-fields': [...commonFields, 'body' ].join(',')
  });
  return axios.get(`${baseUrl}/${articleId}?${queryString}`)
}

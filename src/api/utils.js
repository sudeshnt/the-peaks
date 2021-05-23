import queryString from 'query-string';

export const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const apiKey = process.env.REACT_APP_API_KEY;

export const NewsSections = Object.freeze({
  NEWS: 'news',
  SPORT: 'sport',
  CULTURE: 'culture',
  LIFE_STYLE: 'lifeandstyle',
});

export const ShowFields = Object.freeze({
  HEADLINE: 'headline',
  THUMBNAIL: 'thumbnail',
  BODY: 'body',
  TRAIL_TEXT: 'trailText',
});

export const commonFields = [ShowFields.HEADLINE, ShowFields.THUMBNAIL];

export const getQueryString = (queryObj = {}) => {
  const queryObject = {
    ...queryObj,
    'api-key': apiKey,
  };
  return queryString.stringify(queryObject);
};

export const getShowFields = (additionalFields = []) => commonFields.concat(additionalFields).join(',');

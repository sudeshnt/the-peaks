import queryString from 'query-string';

export const TopStoriesCount = 8;
export const ArticlesPerSection = 6;

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
  };
  return queryString.stringify(queryObject);
};

export const getShowFields = (additionalFields = []) => commonFields.concat(additionalFields).join(',');

import axios from "axios";
import queryString from "query-string"

export const getQueryString = ({fields = ['thumbnail', 'trailText'], count = 15}) => {
  const queryObject = {
    'show-fields': fields?.length > 0 ? fields.join(',') : '',
    'page-size': count,
    'api-key': process.env.REACT_APP_API_KEY
  };
  return queryString.stringify(queryObject);
}

export const fetchSection = (section, count) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const queryString = getQueryString({
    count
  })

  return axios.get(`${baseUrl}/${section}?${queryString}`)
}

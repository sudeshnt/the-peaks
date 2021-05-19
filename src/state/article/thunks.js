import { 
  fetchTopNewsInProgress,
  fetchTopNewsSuccess,
  fetchTopNewsFailure,
  fetchSportsNewsInProgress,
  fetchSportsNewsSuccess,
  fetchSportsNewsFailure
} from "./actions";
import * as newsApi from "../../api/news";

export const fetchTopNews = _ => async dispatch => {
  try {
    dispatch(fetchTopNewsInProgress());
    const response = await newsApi.fetchSection('news', 100);
    dispatch(fetchTopNewsSuccess(response?.data?.response?.results))
  } catch(e) {
    dispatch(fetchTopNewsFailure(e))
  }
}


export const fetchSportsNews = _ => async dispatch => {
  try {
    dispatch(fetchSportsNewsInProgress());
    const response = await newsApi.fetchSection('sport', 100);
    dispatch(fetchSportsNewsSuccess(response?.data?.response?.results))
  } catch(e) {
    dispatch(fetchSportsNewsFailure(e))
  }
}
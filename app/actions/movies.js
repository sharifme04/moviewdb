import axios from 'axios';
import Config from 'react-native-config';

import {
  FETCH_CATEGORY_REQUESTED,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_ITEMS_REQUESTED,
  FETCH_CATEGORY_ITEMS_SUCCESS,
  FETCH_CATEGORY_ITEMS_FAILURE,
  DETAILS_ITEM_REQUESTED,
  DETAILS_ITEM_SUCCESS,
  DETAILS_ITEM_FAILURE,
  FETCH_MOVIES_REQUESTED,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../actionTypes/moviesType';

export function fetchCategory() {
  return (dispatch) => {
    dispatch({
      type: FETCH_CATEGORY_REQUESTED,
    });
    axios
      .get(
        `${Config.BASE_API}/genre/movie/list?api_key=${Config.API_KEY}&language=en-US`,
      )
      .then((response) => {
        dispatch({
          type: FETCH_CATEGORY_SUCCESS,
          category: response.data,
        });
        // console.log(response.data);
      })
      .catch((error) => {
        dispatch({
          type: FETCH_CATEGORY_FAILURE,
          error: error,
        });
      });
  };
}

export function fetchCategoryItems(id, page) {
  return (dispatch) => {
    dispatch({
      type: FETCH_CATEGORY_ITEMS_REQUESTED,
    });
    axios
      .get(
        `${Config.BASE_API}/discover/movie?api_key=${Config.API_KEY}&with_genres=${id}&page=${page}`,
      )
      .then((response) => {
        dispatch({
          type: FETCH_CATEGORY_ITEMS_SUCCESS,
          categoryItems: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_CATEGORY_ITEMS_FAILURE,
          error: error,
        });
      });
  };
}

export function detailsMovies(id) {
  return (dispatch) => {
    dispatch({
      type: DETAILS_ITEM_REQUESTED,
    });
    axios
      .get(`${Config.BASE_API}/movie/${id}?api_key=${Config.API_KEY}`)
      .then((response) => {
        dispatch({
          type: DETAILS_ITEM_SUCCESS,
          movie: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: DETAILS_ITEM_FAILURE,
          error: error,
        });
      });
  };
}

export function fetchMoviesLive(searchKey, page) {
  return (dispatch) => {
    dispatch({
      type: FETCH_MOVIES_REQUESTED,
    });
    axios
      .get(
        `${Config.BASE_API}/search/movie?api_key=${Config.API_KEY}&query=${searchKey}&page=${page}`,
      )
      .then((response) => {
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          liveMovies: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_MOVIES_FAILURE,
          error: error,
        });
      });
  };
}

//https://api.themoviedb.org/3/discover/movie?api_key=428e47f069133d75630882889a482070&with_genres=28

import {ADD_FAVOURITE, REMOVE_FAVOURITE} from '../actionTypes/moviesType';

export function addFavourite(title) {
  return (dispatch) => {
    dispatch({
      type: ADD_FAVOURITE,
      title: title,
    });
  };
}

export function removeFavourite(title) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FAVOURITE,
      title: title,
    });
  };
}

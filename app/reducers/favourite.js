import {ADD_FAVOURITE, REMOVE_FAVOURITE} from '../actionTypes/moviesType';

const initialState = {
  favouriteMovies: [],
};

export default function favouriteFlag(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favouriteMovies: [...new Set([...state.favouriteMovies, action.title])],
      };
    case REMOVE_FAVOURITE:
      return {
        favouriteMovies: [
          ...state.favouriteMovies.filter((title) => title !== action.title),
        ],
      };
    default:
      return state;
  }
}

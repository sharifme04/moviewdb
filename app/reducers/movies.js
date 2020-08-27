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

const initialState = {
  category: null,
  liveMovies: null,
  categoryItems: null,
  error: null,
};
export default function movies(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.category,
      };
    case FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case FETCH_CATEGORY_ITEMS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CATEGORY_ITEMS_SUCCESS:
      return {
        ...state,
        categoryItems: action.categoryItems,
        isLoading: false,
      };
    case FETCH_CATEGORY_ITEMS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case DETAILS_ITEM_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case DETAILS_ITEM_SUCCESS:
      return {
        ...state,
        movie: action.movie,
      };
    case DETAILS_ITEM_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case FETCH_MOVIES_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        liveMovies: action.liveMovies,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

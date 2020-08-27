import {combineReducers} from 'redux';
import movies from './movies.js';
import favourite from './favourite';

export default combineReducers({
  movies,
  favourite,
});

import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import DetailsScreen from '../app/screens/Details/DetailsScreen';
import renderer from 'react-test-renderer';

const mockStore = configureMockStore([thunk]);
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
const store = mockStore({});

const details = {
  adult: false,
  backdrop_path: '/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
  belongs_to_collection: {
    id: 86311,
    name: 'The Avengers Collection',
    poster_path: '/tqXiOD5rTyHgabO73Tpw9JDbd88.jpg',
    backdrop_path: '/zuW6fOiusv4X9nnW3paHGfXcSll.jpg',
  },
  budget: 300000000,
  genres: [
    {id: 12, name: 'Adventure'},
    {id: 28, name: 'Action'},
    {id: 878, name: 'Science Fiction'},
  ],
  homepage: 'https://www.marvel.com/movies/avengers-infinity-war',
  id: 299536,
  imdb_id: 'tt4154756',
  original_language: 'en',
  original_title: 'Avengers: Infinity War',
  overview:
    'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
  popularity: 134.549,
  poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
  production_companies: [],
  production_countries: [],
  release_date: '2018-04-25',
  revenue: 2046239637,
  runtime: 149,
  spoken_languages: [],
  status: 'Released',
  tagline: 'An entire universe. Once and for all.',
  title: 'Avengers: Infinity War',
  video: false,
  vote_average: 8.3,
  vote_count: 19430,
};

test('DetailsScreen', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <DetailsScreen />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('DetailsScreen with details data', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <DetailsScreen movie={details} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('DetailsScreen with details empty object ', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <DetailsScreen movie={{}} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

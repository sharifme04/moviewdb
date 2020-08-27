import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import LiveSearchScreen from '../app/screens/LiveSearch/LiveSearchScreen';
import renderer from 'react-test-renderer';

const mockStore = configureMockStore([thunk]);
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
const store = mockStore({});
const fakeresult = [
  {
    adult: false,
    backdrop_path: '/3eGlcdyxqEN57TtU8ypx52V4JMs.jpg',
    genre_ids: [28, 12, 35, 14, 878],
    id: 98566,
    original_language: 'en',
    original_title: 'Teenage Mutant Ninja Turtles',
    overview:
      "The city needs heroes. Darkness has settled over New York City as Shredder and his evil Foot Clan have an iron grip on everything from the police to the politicians. The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April and her wise-cracking cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan.",
    popularity: 112.221,
    poster_path: '/azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg',
    release_date: '2014-08-07',
    title: 'Teenage Mutant Ninja Turtles',
    video: false,
    vote_average: 5.9,
    vote_count: 5078,
  },
];

test('LiveSearchScreen', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <LiveSearchScreen />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('LiveSearchScreen with result', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <LiveSearchScreen total={fakeresult} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('LiveSearchScreen empty result ', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <LiveSearchScreen total={[]} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

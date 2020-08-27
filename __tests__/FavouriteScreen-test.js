import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import FavouriteScreen from '../app/screens/Favourite/FavouriteScreen';
import renderer from 'react-test-renderer';

const mockStore = configureMockStore([thunk]);
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
const store = mockStore({});

const fakefavorite = ['Ava'];

test('FavouriteScreen', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <FavouriteScreen />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('FavouriteScreen with data ', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <FavouriteScreen favourite={fakefavorite} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('FavouriteScreen with empty array ', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <FavouriteScreen favourite={[]} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

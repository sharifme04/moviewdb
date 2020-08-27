import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import HomeScreen from '../app/screens/Home/HomeScreen';
import renderer from 'react-test-renderer';

const mockStore = configureMockStore([thunk]);
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
const store = mockStore({});
const fakeGenere = [
  {id: 16, name: 'Animation'},
  {id: 35, name: 'Comedy'},
  {id: 80, name: 'Crime'},
  {id: 99, name: 'Documentary'},
];
test('HomeScreen', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('HomeScreen with data', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomeScreen fakeGenere={fakeGenere} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('HomeScreen with empty Array data', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomeScreen fakeGenere={[]} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

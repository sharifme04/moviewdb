import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import EmptyComponent from '../app/components/EmptyComponent';
import renderer from 'react-test-renderer';

const mockStore = configureMockStore([thunk]);
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
const store = mockStore({});

test('EmptyComponent', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <EmptyComponent />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

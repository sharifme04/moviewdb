import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer, {act} from 'react-test-renderer';
//import {act} from 'react-dom/test-utils';
import thunk from 'redux-thunk';
import App from '../App';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
// Note: test renderer must be required after react-native.

test('renders correctly', async () => {
  await act(async () => {
    const tree = await renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // await act(async () => {});
});

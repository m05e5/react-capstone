import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

const ReactTestRenderer = require('react-test-renderer');

it('Creates a snapshot of the home page and it should match the previous one', () => {
  const tree = ReactTestRenderer.create(<Provider store={store}><App /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

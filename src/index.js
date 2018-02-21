import React, { Component } from 'react';
import RootRoutes from './routes';
import { Provider } from 'react-redux';
import initStore from './util/createStore';

const store = initStore();
export default class RootContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootRoutes />
      </Provider>
    );
  }
}
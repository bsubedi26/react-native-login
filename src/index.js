// import React from 'react'
// import { Component } from 'react-native';
// import { Provider } from 'react-redux';

// import { app } from './modules'

// import createStore from './createStore'

// const store = createStore()

// const Main = () => {
//   return (
//     <Provider store={store}>
//       <app.App />
//     </Provider>
//   )
// }

// export default Main

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
} from 'react-native';

import {
  View, 
  Text, 
  TextInput, 
  Button
} from 'react-native-ui-lib';

import { Scene, Router, Actions } from 'react-native-router-flux';

import { Login, Register, Home } from './pages';


import { Provider } from 'react-redux';
import createStore from './store/createStore'
const store = createStore()


const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} title="Login"/>
    <Scene key="register" component={Register} title="Register" />
    <Scene key="home" component={Home} />
  </Scene>
);

export default class Main extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes} />
      </Provider>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Main', () => Main);

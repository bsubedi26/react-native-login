import React, { Component } from 'react';
import { Platform } from 'react-native';
import { View, TextInput, Text, Button } from 'react-native-ui-lib';
import RootRoutes from './src/routes';

export default class App extends Component {
  render() {
    return (
      <RootRoutes />
    );
  }
}
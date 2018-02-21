import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  AsyncStorage
} from 'react-native';

import {
  View, 
  Text, 
  TextInput, 
  Button
} from 'react-native-ui-lib';

export default class Home extends Component {

  async componentDidMount() {
    const token = await AsyncStorage.getItem('feathers-jwt');
    console.log('Home::token: ', token);
  }

  render() {
    return (
      <View flex paddingH-25 paddingT-120>
        <View center>
          <Text blue30 text20>Welcome Home</Text>
        </View>
      </View>
    );

  }
}
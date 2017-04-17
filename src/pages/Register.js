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

export default class Register extends Component {
   
  render() {
    return (
      <View flex paddingH-25 paddingT-120>
        <View center>
          <Text blue30 text20>Register</Text>
        </View>
        
      </View>
    );

  }
}
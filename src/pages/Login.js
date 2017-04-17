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
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
    
  loginPress() {

    Alert.alert('WOOO')
    // if (!this.state.username || this.state.username == 'admin') {
    //   Alert.alert('admin')
    // } else {
    //   Alert.alert('NOT admin')
    // }
  };

  render() {
    return (
      <View flex paddingH-25 paddingT-120>
        <View center>
          <Text blue30 text20>Login</Text>
        </View>

        <TextInput text50 placeholder="username" dark10
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput text50 placeholder="password" secureTextEntry dark10
          onChangeText={(password) => this.setState({password})}
        />
        <View marginT-100 center>
          <Button onPress={this.loginPress} text70 white background-orange30 label="Login"/>
          <Button onPress={Actions.register} link text70 orange30 label="Register" marginT-20/>
        </View>
        
      </View>
    );

  }
}
import React, { Component } from 'react';
import { Platform, Alert } from 'react-native';
import {
  View, 
  Text, 
  TextInput, 
  Button
} from 'react-native-ui-lib';
import { Actions } from "react-native-router-flux";

export default class Login extends Component {
    
  componentDidMount() {
    this.host = Platform.select({
        ios: 'localhost',
        android: '10.0.2.2',
    });
    console.log('host: ', this.host)
  }

  loginPress() {
    const PARAMS = "go"
    Actions.home(PARAMS)
  };

  render() {
    return (
      <View flex paddingH-25 paddingT-25>
        <View marginB-66 center>
          <Text blue10 text10>Login</Text>
        </View>

        <TextInput text60 marginT-25 placeholder="Username" dark10
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput text60 placeholder="Password" secureTextEntry dark10
          onChangeText={(password) => this.setState({password})}
        />

        <View marginT-25 left>
          <Button onPress={this.loginPress} text70 white background-blue30 label="Submit"/>
          {/* <Button onPress={this.loginPress} text70 white background-green30 label="Register" marginT-20/> */}
        </View>
        
      </View>
    );

  }
}
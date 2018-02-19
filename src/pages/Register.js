import React, { Component } from 'react';
import {
  View, 
  Text, 
  TextInput, 
  Button
} from 'react-native-ui-lib';

export default class Register extends Component {
  onPress = () => {

  }

  render() {
    return (
      <View flex paddingH-25 paddingT-25>
        <View marginB-66 center>
          <Text blue10 text10>Register</Text>
        </View>

        <TextInput text60 marginT-25 placeholder="Username" dark10
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput text60 placeholder="Password" secureTextEntry dark10
          onChangeText={(password) => this.setState({ password })}
        />

        <View marginT-25 left>
          <Button onPress={this.onPress} text70 white background-blue30 label="Submit" />
          {/* <Button onPress={this.loginPress} text70 white background-green30 label="Register" marginT-20/> */}
        </View>

      </View>
    );

  }
}
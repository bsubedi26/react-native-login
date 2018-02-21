import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import {
  View, 
  Text, 
  TextInput, 
  Button
} from 'react-native-ui-lib';
import app from "../util/feathers";
import FormContainer from "../components/form/user";

export default class Signup extends Component {
  state = {
    title: "Signup Below"
  }

  handleSubmit = (values) => {
    const { email, password } = values
    const userService = app.service("users")
    
    return userService.create({ email, password })
    .then(data => {
      ToastAndroid.show("User Signup Success!", 2000)
      return Promise.resolve({ data, route: "login" })
    })
    .catch(error => {
      return Promise.reject(error)
    })
  }

  render() {
    const { title } = this.state

    return (
      <View flex paddingH-25 paddingT-25>
        <View marginB-50 center>
          <Text blue10 text20>{title}</Text>
        </View>

        <FormContainer handleSubmit={this.handleSubmit} />
        
      </View>
    );

  }
}
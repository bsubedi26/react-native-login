import React, { Component } from 'react';
import { ToastAndroid, Platform, Alert } from 'react-native';
import {
  View, 
  Text, 
  TextInput, 
  Button
} from 'react-native-ui-lib';
import { Actions } from "react-native-router-flux";
import app from "../util/feathers";
import FormContainer from "../components/form/user";

export default class Login extends Component {
  state = {
    title: "Login Below"
  }
    
  componentDidMount() {
    // this.host = Platform.select({
    //     ios: 'localhost',
    //     android: '10.0.2.2',
    // });
  }

  handleSubmit = (values) => {
    const { email, password } = values
    const credentials = { email, password, strategy: 'local' }

    return app.authenticate(credentials)
      .then(({ accessToken }) => {
        console.log('accessToken: ', accessToken);
        ToastAndroid.show("User Login Success!", 2000)
        app.passport.verifyJWT(accessToken)
        .then(d => console.log(d))
        return Promise.resolve({ data: accessToken, route: "home" })
      })
      .catch(error => {
        // console.log(error)
        return Promise.reject(error)
      })
  };

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
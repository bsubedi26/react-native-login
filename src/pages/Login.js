import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import AuthActions from "src/store/auth/action";

class Login extends Component {
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
    const { dispatch } = this.props
    const credentials = { email, password, strategy: 'local' }

    return dispatch(AuthActions.authenticate(credentials))
      .then((data) => {
        ToastAndroid.show("User Login Success!", 2000)
        return Promise.resolve({ data, route: "home" })
      })
      .catch(error => {
        return Promise.reject(error)
      })
  };

  routeSignup = () => {
    return Actions.signup()
  }

  render() {
    const { title } = this.state

    return (
      <View flex paddingH-25 paddingT-25>
        <View marginB-50 center>
          <Text blue10 text20>{title}</Text>
        </View>
        <FormContainer login handleSubmit={this.handleSubmit} />
      </View>
    );

  }
}

export default connect(null)(Login)
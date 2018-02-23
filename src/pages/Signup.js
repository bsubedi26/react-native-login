import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastAndroid } from 'react-native';
import {
  View, 
  Text, 
  TextInput, 
  Button
} from 'react-native-ui-lib';
import app from "../util/feathers";
import FormContainer from "../components/form/user";
import AuthActions from "src/store/auth/action";

class Signup extends Component {
  static navigationOptions = {
    title: 'Signup',
  }

  state = {
    title: "Signup Below"
  }

  handleSubmit = (values) => {
    const { email, password } = values
    const { dispatch } = this.props
    
    return dispatch(AuthActions.signup({ email, password }))
    .then(data => {
      ToastAndroid.show("User Signup Success!", 2000)
      return Promise.resolve({ data, route: "Login" })
    })
    .catch(error => {
      return Promise.reject(error)
    })
  }

  render() {
    const { title } = this.state
    const { navigation } = this.props

    return (
      <View flex paddingH-25 paddingT-25>
        <View marginB-25 center>
          <Text blue10 text20>{title}</Text>
        </View>
        <FormContainer signup navigation={navigation} handleSubmit={this.handleSubmit} />
      </View>
    );

  }
}

export default connect(null)(Signup)
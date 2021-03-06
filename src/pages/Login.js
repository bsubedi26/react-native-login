import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastAndroid, Platform, Alert } from 'react-native';
import {
  View, 
  Text, 
  TextInput, 
  Button
} from 'react-native-ui-lib';
import feathers from "../util/feathers";
import FormContainer from "../components/form/user";
import AuthActions from "src/store/auth/action";

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }

  state = {
    title: "Login Below"
  }
    
  componentDidMount() {
    // this.host = Platform.select({
    //     ios: 'localhost',
    //     android: '10.0.2.2',
    // });
  }

  handleSubmit = async (values) => {
    const { email, password } = values
    const { dispatch } = this.props
    const credentials = { email, password, strategy: 'local' }

    try {
      const { accessToken } = await feathers.authenticate(credentials)
      ToastAndroid.show("User Login Success!", 2000)
      await dispatch(AuthActions.populateUser(accessToken))
      return Promise.resolve({ data: accessToken, route: "Home" })
    }
    catch (error) {
      return Promise.reject(error)
    }

  };

  render() {
    const { title } = this.state
    const { navigation } = this.props

    return (
      <View flex paddingH-25 paddingT-25>
        <View marginB-25 center>
          <Text blue20 text30>{title}</Text>
        </View>
        <FormContainer navigation={navigation} login handleSubmit={this.handleSubmit} />
      </View>
    );

  }
}

export default connect(null)(Login)
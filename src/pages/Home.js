import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  Alert,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

import {
  View, 
  Text, 
  TextInput, 
  Button
} from 'react-native-ui-lib';
import AuthActions from "src/store/auth/action";

class Home extends Component {

  promptForLogout = () => {
    Alert.alert('Confirm Logout', 'Are you sure you want to log out?',
      [
        {
          text: 'Cancel', onPress: () => {
          }, style: 'cancel'
        },
        { text: 'Yes', onPress: this.logout, style: 'destructive' },
      ]
    );
  }

  logout = async () => {
    const { dispatch } = this.props
    dispatch(AuthActions.logout())
  }

  renderAuthenticated = () => {
    const { auth } = this.props

    return (
      <View marginT-20 center>
        <Text blue30 text60>ID: {auth.id}</Text>
        <Text blue30 text60>Email: {auth.email}</Text>
        <TouchableOpacity style={style.button("lightcoral")} onPress={this.promptForLogout}>
          <Text dark10 text60>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }

  logToken = async () => {
    const token = await AsyncStorage.getItem('feathers-jwt');
    console.log('Log token: ', token);
  }

  render() {
    const { auth } = this.props

    return (
      <View flex paddingH-25 paddingT-100>
        <View center>
          <Text blue30 text20>Welcome Home</Text>
          <Text black10 text40>Logged in? {auth.accessToken ? "True" : "False"}</Text>
          <TouchableOpacity style={style.button("#bfbfbf")} onPress={this.logToken}>
            <Text blue10 text60>Log Token</Text>
          </TouchableOpacity>
        </View>

        {auth.accessToken ? this.renderAuthenticated() : null}

      </View>
    );

  }
}


const style = {
  button(color) {
    return {
      padding: 15, backgroundColor: color, marginTop: 10
    }
  }
}

const mapState = state => ({
  auth: state.auth
})
export default connect(mapState)(Home);
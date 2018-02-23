import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Alert,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import AuthActions from "src/store/auth/action";


class Avatar extends React.Component {

  avatarPressed = () => {
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

  renderAvatar = (avatar) => {
    return (
      <TouchableOpacity style={{ padding: 5 }} onPress={this.avatarPressed}>
        <Image
          source={{ uri: `data:image/png;base64,${avatar}` }}
          style={{ height: 40, width: 40, borderRadius: 40 }}
        />
      </TouchableOpacity>
    )
  }

  render() {
    const { auth } = this.props;
    
    return (
      <View>
        {auth.avatar ? this.renderAvatar(auth.avatar) : null}
      </View>
    )
  }
}
const mapState = state => ({
  auth: state.auth
})

export default connect(mapState)(Avatar);
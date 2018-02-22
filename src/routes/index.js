import React from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import { Router, Stack, Scene } from "react-native-router-flux";
import Ionicons from 'react-native-vector-icons/Ionicons'
import SideMenu from 'src/components/SideMenu';
import AuthActions from "src/store/auth/action";

/**
 * ROOT ROUTES PAGES
 */
import { Login, Signup, Home } from "../pages";

const options = {
  contentComponent: SideMenu,
  drawerWidth: 256
};


class RootRoutes extends React.Component {
  drawerIcon = () => <Ionicons style={styles.leftIcon} name="md-menu" size={32} color="black" />
  
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

  renderNavRightIcon = (avatar) => {
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
    const { auth } = this.props
    
    return (
      <Router>
        {/* <Scene drawer={true} {...options} drawerIcon={drawerIcon()} onRight={() => console.log("Right icon pressed.")} rightButtonImage={auth.avatar ? rightIcon(auth.avatar) : <Text>Login</Text>} key="root"> */}
        <Scene drawer={true} {...options} drawerIcon={this.drawerIcon()} renderRightButton={auth.avatar ? this.renderNavRightIcon(auth.avatar) : <Text></Text>} key="root">
          <Scene initial key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Signup" />
          <Scene key="home" component={Home} title="Home" />
        </Scene>
      </Router>
    )
  }
}

const mapState = state => ({
  auth: state.auth
})
export default connect(mapState)(RootRoutes);
import React from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import { Router, Stack, Scene } from "react-native-router-flux";
import Ionicons from 'react-native-vector-icons/Ionicons'
import SideMenu from 'src/components/SideMenu';
import AuthActions from "src/store/auth/action";
import { StackNavigator, DrawerNavigator } from 'react-navigation';

/**
 * ROOT ROUTES PAGES
 */
import { Login, Signup, Home } from "../pages";


const menuPressed = (navigation) => navigation.navigate('DrawerOpen')
const drawerIcon = (navigation) => <Ionicons style={styles.leftIcon} onPress={menuPressed.bind(this, navigation)} name="md-menu" size={32} color="black" />

const drawerOptions = {
  contentComponent: SideMenu,
  drawerWidth: 256,
  drawerPosition: 'left',
  initialRouteName: 'Home',
};


export const DrawerNav = DrawerNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Home: { screen: Home },
}, drawerOptions)

export const Navigator = StackNavigator({
  Main: {
    screen: DrawerNav,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: drawerIcon(navigation)
      }
    }
  },
}, {
    initialRouteName: 'Main',
})

class RootRoutes extends React.Component {
  render() {
    return (
      <Navigator />
    )
  }
}

export default RootRoutes
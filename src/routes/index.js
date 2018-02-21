import React from 'react';
import styles from "./styles";
import { Router, Stack, Scene } from "react-native-router-flux";
import Ionicons from 'react-native-vector-icons/Ionicons'
import SideMenu from 'src/components/SideMenu';

/**
 * ROOT ROUTES PAGES
 */
import { Login, Signup, Home } from "../pages";

const options = {
  contentComponent: SideMenu,
  drawerWidth: 256
};
const drawerIcon = () => <Ionicons style={styles.leftIcon} name="md-menu" size={32} color="black" />

const RootRoutes = () => (
  <Router>
    <Scene drawer={true} {...options} drawerIcon={drawerIcon()} key="root">
      <Scene initial key="login" component={Login} title="Login" />
      <Scene key="signup" component={Signup} title="Signup" />
      <Scene key="home" component={Home} title="Home" />
    </Scene>
  </Router>
)

export default RootRoutes;
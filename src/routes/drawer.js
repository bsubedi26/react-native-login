import { Login, Signup, Home } from "../pages";
import { DrawerNavigator } from 'react-navigation';
import SideMenu from 'src/components/SideMenu';
// import HomeTab from "./home";

const drawerOptions = {
  contentComponent: SideMenu,
  drawerWidth: 256,
  drawerPosition: 'left',
  initialRouteName: 'Signup',
};

const DrawerNav = DrawerNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Home: { screen: Home },
}, drawerOptions)

// DrawerNav.navigationOptions = {
//   header: null
// }

export default DrawerNav;
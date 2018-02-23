import { Login, Signup, Home } from "../pages";
import { DrawerNavigator } from 'react-navigation';
import HomeTab from "./home";
import SideMenu from 'src/components/SideMenu';

const drawerOptions = {
  contentComponent: SideMenu,
  drawerWidth: 256,
  drawerPosition: 'left',
  initialRouteName: 'Home',
};

const DrawerNav = DrawerNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Home: { screen: HomeTab },
}, drawerOptions)

// DrawerNav.navigationOptions = {
//   header: null
// }

export default DrawerNav;
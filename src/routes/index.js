import React from 'react';
import styles from "src/themes/AppStyles";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StackNavigator } from 'react-navigation';
import DrawerNav from "./drawer";

const menuPressed = (navigation) => navigation.navigate('DrawerOpen');
const drawerIcon = (navigation) => <Ionicons style={styles.leftIcon} onPress={menuPressed.bind(this, navigation)} name="md-menu" size={32} color="black" />
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

export default RootRoutes;
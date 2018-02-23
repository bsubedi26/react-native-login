import React from "react";
import { StackNavigator, TabNavigator, HeaderBackButton } from "react-navigation";
import { Home, Users, UserDetail } from "../pages";


const homeTabOptions = {
  tabBarPosition: "bottom",
  initialRouteName: "Users",
}

const userStackOptions = {
  headerMode: "none"
}

const UserStack = StackNavigator({
  Users: { screen: Users },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      headerRight: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    })
  },
}, userStackOptions)

const HomeTab = TabNavigator({
  Home: { screen: Home },
  Users: { screen: UserStack }
  // Users: { screen: Users },
  // UserDetail: { screen: UserDetail },
}, homeTabOptions)

export default HomeTab
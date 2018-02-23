import React, { Component } from 'react';
import {
  Alert,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  StyleSheet,
  FlatList
} from 'react-native';

import {
  Text,
  TextInput,
  Button
} from 'react-native-ui-lib';

class UserDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'User Detail',
    }
  }

  render() {
    const { user } = this.props.navigation.state.params
    

    return (
      <View style={style.mapContainer}>
        <Image
          style={{ width: 48, height: 48 }}
          source={{ uri: user.picture.thumbnail }}
        />
        <Text blue10 text70>{user.email}</Text>
      </View>
    );

  }
}


const style = StyleSheet.create({
  mapContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 25,
    paddingTop: 25
  }
})

export default UserDetailScreen;
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

class UsersScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Users',
      headerStyle: {
        // backgroundColor: '#9ed1fa',
      },
      headerTitleStyle: {
        // color: 'white'
      },
    }
  }

  state = {
    data: []
  }

  logError = (error) => console.log(error)

  async componentDidMount() {
    try {
      const response = await fetch('https://randomuser.me/api/?results=50')
      const { results } = await response.json()
      this.setState({ data: results })
    }
    catch (error) { return this.logError(error) }
  }

  itemPressed = (user) => {
    const { navigation } = this.props;
    navigation.push("UserDetail", { user });
  }
  
  renderItem = ({ item }) => (
    <View style={style.mapContainer}>
      <Image
        onPress={this.itemPressed.bind(this, item)}
        style={{ width: 48, height: 48 }}
        source={{ uri: item.picture.thumbnail }}
      />
      <Text onPress={this.itemPressed.bind(this, item)} blue10 text70>{item.email}</Text>
      <Text onPress={this.itemPressed.bind(this, item)} blue10 text50>{">"}</Text>
    </View>
  )

  render() {
    const { data } = this.state;

    return (
      <ScrollView style={style.container}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, idx) => idx.toString()}
        />
      </ScrollView>
    );

  }
}


const style = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 25,
    paddingTop: 25
  },
  mapContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  }
})

export default UsersScreen;
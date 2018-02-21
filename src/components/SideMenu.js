import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import { ScrollView, Text, View } from 'react-native';
import { Actions } from "react-native-router-flux";

class SideMenu extends Component {
  navigateToScreen = (path) => () => {
    if (Actions[path]) {
      return Actions[path]()
    } 
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Public
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('home')}>
                Home
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Account
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('login')}>
                Login
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('signup')}>
                Signup
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Foot Footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
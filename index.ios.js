/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

class Wittgenstein extends Component {
  press() {
    console.log('press');
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.container}
        onPress={() => this.press()}>
        <Text style={styles.text}>
          Say something. Like "taco"
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('Wittgenstein', () => Wittgenstein);

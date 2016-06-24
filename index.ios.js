/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

class Wittgenstein extends Component {
  render() {
    return (
      <View>
        <Text>
        Say something. Like "taco"
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Wittgenstein', () => Wittgenstein);

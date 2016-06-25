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

// For the API see the react-native-audio example at
// https://github.com/jsierles/react-native-audio/blob/master/AudioExample/index.ios.js
import {AudioRecorder, AudioUtils} from 'react-native-audio';

class Wittgenstein extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentTime: 0,
      finished: false,
    };

    let audioPath = AudioUtils.DocumentDirectoryPath + '/test.caf';
    AudioRecorder.prepareRecordingAtPath(audioPath);
    AudioRecorder.onProgress = (data) => {
      this.setState({currentTime: Math.floor(data.currentTime)});
    };
    AudioRecorder.onFinished = (data) => {
      this.setState({finished: data.finished});
      console.log(`Finished recording: ${data.finished}`);
    };
  }

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

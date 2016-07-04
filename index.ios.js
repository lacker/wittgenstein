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
      recording: false,
      playing: false,
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

  status() {
    if (this.state.recording) {
      return 'recording';
    }
    if (this.state.playing) {
      return 'playing';
    }
    return 'waiting';
  }

  stop() {
    if (this.state.recording) {
      AudioRecorder.stopRecording();
    }
    if (this.state.playing) {
      AudioRecorder.stopPlaying();
    }
    this.setState({recording: false, playing: false});
  }

  record() {
    this.stop();
    AudioRecorder.startRecording();
    this.setState({recording: true});
  }

  play() {
    this.stop();
    AudioRecorder.playRecording();
    this.setState({playing: true});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.2, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>
            {this.status()}
          </Text>
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.record()}>
          <Text style={styles.text}>
            Record
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.play()}>
          <Text style={styles.text}>
            Play
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
  },
  text: {
    fontSize: 80,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('Wittgenstein', () => Wittgenstein);

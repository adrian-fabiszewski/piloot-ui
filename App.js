import React, { Component } from 'react';
import { View } from 'react-native';
import { VideoPlayer } from './src/component/video-player';

export default class PilootApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
          <VideoPlayer />
        </View>
        <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

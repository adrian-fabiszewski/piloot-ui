import React, { Component } from 'react';
import {
  Text, View, Dimensions, WebView,
} from 'react-native';

export default class VideoPlayer extends Component {
  render() {
    const { width } = Dimensions.get('window');

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#F5FCFF', justifyContent: 'flex-end' }}>
          <Text
            id="route-title"
            style={{ textAlign: 'center', bottom: 10, fontSize: 24 }}
          >
            Piloot Route
          </Text>
        </View>
        <View style={{ flex: 3, backgroundColor: '#808080', alignItems: 'center' }}>
          <WebView
            id="route-video-player"
            style={{ height: 300, width }}
            source={{ uri: 'https://www.youtube.com/embed/eRQRTk9CLpo' }}
          />
        </View>
      </View>
    );
  }
}

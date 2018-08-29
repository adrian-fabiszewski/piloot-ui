import React, { Component } from 'react';
import YouTube from 'react-native-youtube';

export class VideoPlayer extends Component {
  render() {
    return (
      <YouTube
        apiKey="key"
        videoId="Y0w40sZw99k" // The YouTube video ID
        play // control playback of video with true/false
        fullscreen={false} // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}
        onError={e => this.setState({ error: e.error })}
        style={{
          alignSelf: 'stretch',
          height: 300
        }}
      />
    );
    // return <Text style={{ position: 'absolute', bottom: 0 }}>{this.props.text}</Text>;
  }
}

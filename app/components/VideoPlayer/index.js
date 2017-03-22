/**
*
* VideoPlayer
*
*/

import React from 'react';
import YouTube from 'react-youtube';
// import styled from 'styled-components';


class VideoPlayer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  _onReady(event) { // eslint-disable-line no-underscore-dangle
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      // maxHeight: '390',
      width: '100%',
      maxWidth: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady} // eslint-disable-line no-underscore-dangle
      />
    );
  }
}

VideoPlayer.propTypes = {

};

export default VideoPlayer;

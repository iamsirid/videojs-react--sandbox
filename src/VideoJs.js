// taken from https://github.com/videojs/video.js/blob/master/docs/guides/react.md
import React from 'react';
import videojs from 'video.js';
import vjsqs from '@silvermine/videojs-quality-selector';
import 'video.js/dist/video-js.min.css';
import '@silvermine/videojs-quality-selector/dist/css/quality-selector.css';

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate video.js
    vjsqs(videojs);
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });

    this.player.src([
      {
        src: 'https://d3bju2ofgne5ys.cloudfront.net/videos/~4xwcj6GBliOH86',
        type: 'video/mp4',
        label: 'Original',
        selected: true
      },
      {
        src: 'https://d3bju2ofgne5ys.cloudfront.net/videos/240/~4xwcj6GBliOH86',
        type: 'video/mp4',
        label: '240P'
      }
    ]);

    this.player.controlBar.addChild('QualitySelector');
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <>
        <div data-vjs-player>
          <video ref={node => (this.videoNode = node)} className="video-js" />
        </div>
      </>
    );
  }
}

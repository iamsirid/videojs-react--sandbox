import React from 'react';
import './App.css';
import VideoJs from './VideoJs';

const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 300,
  controls: true,
  sources: [
    {
      src: 'https://d3bju2ofgne5ys.cloudfront.net/videos/~4xwcj6GBliOH86',
      type: 'video/mp4',
      label: '720P'
    },
    {
      src:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
      label: '480P'
    }
  ]
};

function App() {
  return (
    <div className="App">
      <VideoJs {...videoJsOptions} />
    </div>
  );
}

export default App;

// BackgroundVideo.js

import React from 'react';

function BackgroundVideo() {
  return (
    <div className="background-video">
      <iframe
        width="560"
        height="315"
        src="https://youtu.be/ohESwJ0VE7A"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default BackgroundVideo;

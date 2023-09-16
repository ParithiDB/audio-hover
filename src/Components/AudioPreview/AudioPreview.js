import React, { useRef } from 'react';

function AudioPreview({ audioSrc }) {
  const audioRef = useRef(null);

  const handleMouseOver = () => {
    audioRef.current.play();
  };

  const handleMouseOut = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        controls
      />
      <h1>Audio preview</h1>
    </div>
  );
};

export default AudioPreview;

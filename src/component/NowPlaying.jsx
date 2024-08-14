// NowPlaying.js
import React from 'react';

const NowPlaying = ({ track }) => {
  if (!track) return null; // Don't render anything if no track is playing

  return (
    <div>
      <h2>Now Playing</h2>
      <p><strong>Track:</strong> {track.name}</p>
      <p><strong>Artist:</strong> {track.artist}</p>
    </div>
  );
};

export default NowPlaying;

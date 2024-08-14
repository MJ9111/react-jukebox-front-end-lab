// TrackList.js
import React from 'react';

const TrackList = ({ tracks, onEdit, onDelete, onPlay }) => {
  return (
    <ul>
      {tracks.map((track) => (
        <li key={track.id}>
          {track.name} by {track.artist}
          <button onClick={() => onEdit(track)}>Edit</button>
          <button onClick={() => onDelete(track.id)}>Delete</button>
          <button onClick={() => onPlay(track)}>Play</button>
        </li>
      ))}
    </ul>
  );
};

export default TrackList;

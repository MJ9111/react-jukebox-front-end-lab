// TrackForm.js
import React, { useState, useEffect } from 'react';

const TrackForm = ({ onSubmit, trackToEdit, onCancel }) => {
  const [trackName, setTrackName] = useState('');
  const [trackArtist, setTrackArtist] = useState('');

  useEffect(() => {
    if (trackToEdit) {
      setTrackName(trackToEdit.name);
      setTrackArtist(trackToEdit.artist);
    }
  }, [trackToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTrack = { name: trackName, artist: trackArtist, id: trackToEdit?.id };
    onSubmit(updatedTrack);
    setTrackName('');
    setTrackArtist('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Track Name:
          <input
            type="text"
            value={trackName}
            onChange={(e) => setTrackName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Artist:
          <input
            type="text"
            value={trackArtist}
            onChange={(e) => setTrackArtist(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">{trackToEdit ? 'Update Track' : 'Add Track'}</button>
      {trackToEdit && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default TrackForm;

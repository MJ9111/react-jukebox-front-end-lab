// App.js
import React, { useState } from 'react';
import TrackForm from './component/TrackForm';
import TrackList from './component/TrackList';
import NowPlaying from './component/NowPlaying';
import Home from './component/Home';
import './App.css';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [trackToEdit, setTrackToEdit] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleAddTrackClick = () => {
    setTrackToEdit(null); // Reset the track to edit
    setShowForm(true);
  };

  const handleEditTrackClick = (track) => {
    setTrackToEdit(track); // Set the track to edit
    setShowForm(true);   
  };

  const handleTrackSubmit = (updatedTrack) => {
    if (trackToEdit) {
                             // Editing an existing track
      setTracks(tracks.map((track) => (track.id === updatedTrack.id ? updatedTrack : track)));
    } else {
                             // Adding a new track
      setTracks([...tracks, { ...updatedTrack, id: Date.now() }]);
    }
    setShowForm(false);
    setTrackToEdit(null);
  };

  const handleCancelEdit = () => {
    setShowForm(false);
    setTrackToEdit(null);
  };
                             //api call
  const handleDeleteTrack = async (trackId) => {
    try {
      await fetch(`/api/tracks/${trackId}`, {
        method: 'DELETE', // Delete the track
      });
      setTracks(tracks.filter((track) => track.id !== trackId));
    } catch (error) {
      console.error('Failed to delete track:', error);
    }
  };
  

  const handlePlayTrack = (track) => {
    setCurrentTrack(track);  // Set the current track
  };

  return (
    <div>
      <div>
        <h1>Juke Box</h1>
        <link rel="Home" href="/" />
      </div>
      <button onClick={handleAddTrackClick}>Add New Track</button>
      {showForm && (
        <TrackForm
          onSubmit={handleTrackSubmit}
          trackToEdit={trackToEdit}
          onCancel={handleCancelEdit}
        />
      )}
      <TrackList
        tracks={tracks}
        onEdit={handleEditTrackClick}
        onDelete={handleDeleteTrack}
        onPlay={handlePlayTrack}
      />
      <NowPlaying track={currentTrack} />
    </div>
  );
};

export default App;

//Home.jsx
import React from 'react';
import TrackForm from './TrackForm';
import TrackList from './TrackList';
import NowPlaying from './NowPlaying';
import './Home.css';

const Home = () => {
    return (
        <div>
        <h1>Music Player</h1>
        <NowPlaying />
        <TrackList />
        <TrackForm />
        </div>
    );
    }
export default Home;
  
// src/pages/Home.jsx
import React from 'react';
import WhatsPopularTen from '../components/WhatsPopularTen';
import UpcomingMoviesTen from '../components/UpcomingMoviesTen';

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">Welcome to Movie App</h1>
      <WhatsPopularTen />
      {/* <UpcomingMoviesTen /> */}
    </div>
  );
};

export default Home;

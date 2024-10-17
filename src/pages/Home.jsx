// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async'; // Helmet import
import WhatsPopularTen from '../components/WhatsPopularTen';
import UpcomingMoviesTen from '../components/UpcomingMoviesTen';

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Movie App - Home</title>
        <meta name="description" content="Discover the most popular and upcoming movies on our platform." />
        <meta property="og:title" content="Movie App - Home" />
        <meta property="og:description" content="Check out the most popular and upcoming movies." />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="text-3xl font-bold">Welcome to Movie App</h1>
      <WhatsPopularTen />
      {/* <UpcomingMoviesTen /> */}
    </div>
  );
};

export default Home;

// src/pages/TVShows.jsx
import React, { useEffect, useState } from 'react';

const TVShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchTVShows = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.VITE_API_KEY}`
      );
      const data = await response.json();
      setShows(data.results);
    };

    fetchTVShows();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Popular TV Shows</h1>
      <div className="grid grid-cols-4 gap-4">
        {shows.map((show) => (
          <div key={show.id} className="bg-gray-800 p-4 rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-xl mt-2">{show.name}</h2>
            <p className="text-gray-400">First Air Date: {show.first_air_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShows;

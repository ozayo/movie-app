// src/pages/FavoriteMovies.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async'; 
import MovieList from '../components/MovieList';

const FavoriteMovies = () => {
  const favoriteIds = useSelector((state) => state.favorites.favorites);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const promises = favoriteIds.map(async (id) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
        );
        return response.json();
      });
      const movies = await Promise.all(promises);
      setFavoriteMovies(movies);
    };

    if (favoriteIds.length > 0) {
      fetchFavoriteMovies();
    }
  }, [favoriteIds]);

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Movie App - My Favorite Movies</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">My Favorite Movies</h1>
      {favoriteMovies.length > 0 ? (
        <MovieList movies={favoriteMovies} />
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default FavoriteMovies;

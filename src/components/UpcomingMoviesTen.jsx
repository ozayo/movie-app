// src/components/UpcomingMoviesTen.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/slices/moviesSlice'; // Vizyona girecek filmleri Redux slice'tan çekiyoruz
import MovieList from './MovieList'; // MovieList bileşenini kullanıyoruz

const UpcomingMoviesTen = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies({ category: 'upcoming', page: 1 })); // İlk sayfadaki yakında vizyona girecek filmleri çekiyoruz
  }, [dispatch]);

  const topTenMovies = movies.slice(0, 10); // İlk 10 filmi alıyoruz

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Upcoming Movies</h2>
      {movies.length > 0 ? (
        <MovieList movies={topTenMovies} /> // İlk 10 filmi gösteriyoruz
      ) : (
        <p>No upcoming movies found</p>
      )}
    </div>
  );
};

export default UpcomingMoviesTen;

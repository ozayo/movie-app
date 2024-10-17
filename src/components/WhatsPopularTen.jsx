// src/components/WhatsPopularTen.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/slices/moviesSlice'; // Popüler filmleri Redux slice'tan çekiyoruz
import MovieList from './MovieList'; // MovieList bileşenini kullanıyoruz

const WhatsPopularTen = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies({ category: 'popular', page: 1 })); // İlk sayfadaki popüler filmleri çekiyoruz
  }, [dispatch]);

  const topTenMovies = movies.slice(0, 10); // Son 10 filmi alıyoruz

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-4">What's Popular</h2>

      {movies.length > 0 ? (
        <>
          <MovieList movies={topTenMovies} />
          {/* Ortada bir buton */}
          <div className="flex justify-center mt-4">
            <Link to="/movies" className="bg-black text-white py-4 px-9 mt-5 rounded-md hover:bg-gray-800">
              See all movies
            </Link>
          </div>
        </>
      ) : (
        <p>No popular movies found</p>
      )}
    </div>
  );
};

export default WhatsPopularTen;

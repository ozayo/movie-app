// src/pages/Movies/index.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async'; 
import { fetchMovies } from '../../redux/slices/moviesSlice'; // Redux ile veri çekiyoruz
import Pagination from '../../components/Pagination'; // Pagination bileşeni
import MovieList from '../../components/MovieList'; // MovieList bileşenini ekledik

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);
  const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa durumu
  const [totalPages, setTotalPages] = useState(100); // Toplam sayfa sayısı

  useEffect(() => {
    dispatch(fetchMovies({ category: 'popular', page: currentPage })); // Varsayılan kategori 'popular' olarak belirleniyor
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (movies.length > 0) {
      setTotalPages(100); // API'den gelen totalPages'e göre güncelleyebilirsin
    }
  }, [movies]);

  const handlePageChange = (page) => {
    setCurrentPage(page); // Sayfa değiştirildiğinde currentPage güncellenir
  };

  return (
    <div className="">
      <Helmet>
        <title>Movie App - Popular Movies</title>
        <meta name="description" content="Browse the most popular movies available now." />
        <meta property="og:title" content="Popular Movies - Movie App" />
        <meta property="og:description" content="Explore the top trending popular movies." />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Popular Movies</h1>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      {/* MovieList bileşenini ekledik */}
      {movies && movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies found</p>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Movies;

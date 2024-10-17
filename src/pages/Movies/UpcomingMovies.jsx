// src/pages/Movies/UpcomingMovies.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/slices/moviesSlice'; // Redux ile veri çekiyoruz
import Pagination from '../../components/Pagination'; // Pagination bileşeni
import MovieList from '../../components/MovieList'; // MovieList bileşenini ekledik

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);
  const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa durumu
  const [totalPages, setTotalPages] = useState(10); // Toplam sayfa sayısı

  useEffect(() => {
    dispatch(fetchMovies({ category: 'upcoming', page: currentPage })); // Doğru kategori 'upcoming' olarak belirleniyor
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (movies.length > 0) {
      setTotalPages(10); // API'den gelen totalPages'e göre güncelleyebilirsin
    }
  }, [movies]);

  const handlePageChange = (page) => {
    setCurrentPage(page); // Sayfa değiştirildiğinde currentPage güncellenir
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Upcoming Movies</h1>

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

export default UpcomingMovies;

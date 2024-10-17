// src/components/Search.jsx
import React, { useState, useEffect, useRef } from 'react';
import { searchMovies } from '../api';
import { Link } from 'react-router-dom';

const Search = ({ closeSearch }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchRef = useRef(null);

  // Arama kutusunun dışına tıklayınca arama kutusunu kapatma
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch(); // Arama kutusunu kapatma fonksiyonu
      }
    };

    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeSearch(); // ESC tuşuna basıldığında arama kutusunu kapatır
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [closeSearch]);

  useEffect(() => {
    if (query.length < 3) {
      setMovies([]); // Arama metni çok kısaysa sonuçları temizliyoruz
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      const fetchMovies = async () => {
        try {
          setLoading(true);
          setError(null);
          const results = await searchMovies(query);
          setMovies(results);
          setLoading(false);
        } catch (err) {
          setError('Error fetching movies');
          setLoading(false);
        }
      };

      fetchMovies();
    }, 300); // 300 ms debounce süresi

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
        className="border border-gray-400 p-2 rounded w-full"
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {movies.length > 0 && (
        <div className="absolute bg-white border border-gray-300 w-full mt-2 rounded-lg max-h-64 overflow-y-auto z-10">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={closeSearch} // Film seçildiğinde arama kutusunu kapatır
            >
              {movie.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

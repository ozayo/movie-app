// src/components/MovieCast.jsx
import React, { useEffect, useState } from 'react';

const MovieCast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        setCast(data.cast.slice(0, 10)); // İlk 10 oyuncuyu alıyoruz
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  if (loading) return <p>Loading cast...</p>;
  if (error) return <p>Error loading cast: {error}</p>;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Top Cast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {cast.map((actor) => (
          <div key={actor.id} className="text-center flex items-center flex-col bg-gray-100 p-2 rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              className="w-20 min-w-[80px] max-w-[80px] h-20 min-h-[80px] max-h-[80px] rounded-full object-cover bg-center shadow"
            />
            <h3 className="text-sm mt-2 text-black font-medium">{actor.name}</h3>
            <p className="text-sm text-gray-400">as {actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;

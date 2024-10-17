// src/components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  return (
    
    <div className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-900 hover:shadow-lg">
      <Link to={`/movies/${movie.id}`} className="block">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto rounded-lg"
        />
        <h2 className="text-lg mt-2 text-white">{movie.title}</h2>
        <div className='flex justify-between items-center'> 
          <p className="text-gray-400">{movie.release_date.slice(0, 4)}</p>
          <div className='flex justify-between items-center space-x-1'>
            <FaStar className='text-yellow-500 w-4' />
            <p className="text-gray-400"> {movie.vote_average.toFixed(1)}</p>
          </div>
        </div>
        </Link>
      </div>
    
  );
};

export default MovieCard;


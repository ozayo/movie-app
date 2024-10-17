// src/pages/MovieDetail.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetail } from '../redux/slices/movieDetailSlice';
import MovieCast from '../components/MovieCast'; // Oyuncu listesi
import { FaStar, FaRegClock, FaRegCalendarCheck, FaVolumeDown, FaMapMarkerAlt } from "react-icons/fa";


const MovieDetail = () => {
  const { id } = useParams(); // useParams ile film ID'sini alıyoruz
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { movie, status, error } = useSelector((state) => state.movieDetail); // Redux'tan verileri çekiyoruz

  useEffect(() => {
    dispatch(fetchMovieDetail(id)); // Redux slice'dan API çağrısını yapıyoruz
  }, [dispatch, id]);

  if (status === 'loading' || !movie) return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  // Filmin süresini alip saat ve dakikaya çevirmek
  const runtime = movie.runtime;
  const hours = Math.floor(runtime / 60); // Tam saat kısmı
  const minutes = runtime % 60; // Kalan dakika kısmı

  return (
    <div className="container mx-auto p-4">
      {movie ? (
        <div className="flex flex-col md:flex-row items-start">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            
            <div className='flex gap-4 items-center my-2'>
              {/* <p className="text-gray-900 mb-4">Release Date: {movie.release_date}</p> */}
              <div className="flex gap-1 items-center">
                <FaRegCalendarCheck className='w-4 h-4' />
                <p className="text-gray-600 text-sm">{movie.release_date.slice(0, 4)}</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaRegClock className='w-4 h-4' />
                <p className="text-gray-600 text-sm">{hours}h {minutes}m</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar className='text-yellow-500 w-4' />
                <p className='text-gray-600 text-sm'><strong>{movie.vote_average.toFixed(1)}</strong>/10</p>
              </div>
              {/* <div className="flex gap-1 items-center">
                <FaMapMarkerAlt className='w-3 h-3' />
                <p className='text-gray-600 text-sm'>{movie.production_countries[0]?.name}</p> 
              </div>
              <div className="flex gap-1 items-center">
                <FaVolumeDown className='w-4 h-4' />
                 <p className='text-gray-600 text-sm'>{movie.spoken_languages[0]?.english_name}</p> 
              </div> */}
            </div>
            
            <h2 className="text-2xl font-bold mt-3">Overview</h2>
            <p className="text-gray-900 mb-4">{movie.overview}</p>
            
            <div className='flex space-x-2 overflow-x-auto no-scrollbar'>
              {movie.genres.map((genre) => (
                <div className='px-3 py-1 bg-gray-200 text-xs rounded  text-black whitespace-nowrap' key={genre.id}>{genre.name}</div>
              ))}
            </div>
            

            <MovieCast movieId={id} />
          </div>
        </div>
      ) : (
        <p>Movie details not found</p>
      )}

      {/* Back Button */}
      <div className="mt-8">
        <button
          onClick={() => navigate(-1)} // Bir önceki sayfaya dönmek için
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;

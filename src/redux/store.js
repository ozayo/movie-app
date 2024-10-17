// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import movieDetailReducer from './slices/movieDetailSlice'; // Movie detail slice'ı import ediyoruz
import favoritesReducer from './slices/favoritesSlice'; 

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetail: movieDetailReducer,
    favorites: favoritesReducer, 
  },
});

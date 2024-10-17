// src/redux/slices/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Başlangıçta favori filmler ID'leri (localStorage'dan alacağız)
const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: initialFavorites,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload.id); // Sadece ID'yi kaydediyoruz
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); // localStorage'a kaydet
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (id) => id !== action.payload.id
      );
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); // localStorage'dan çıkar
    },
    toggleFavorite: (state, action) => {
      const existingIndex = state.favorites.findIndex(
        (id) => id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.favorites = state.favorites.filter((id) => id !== action.payload.id);
      } else {
        state.favorites.push(action.payload.id);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); // localStorage'a kaydet
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

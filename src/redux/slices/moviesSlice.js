// src/redux/slices/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Gelecekteki tarihler için upcoming filmleri çekiyoruz ve sıralıyoruz
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ category = 'popular', page = 1 }) => {
    const today = new Date().toISOString().split('T')[0]; // Bugünün tarihi (YYYY-MM-DD)
    
    let apiUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
    
    // Eğer category 'upcoming' ise, gelecekteki filmleri almak için API parametrelerini ekliyoruz
    if (category === 'upcoming') {
      apiUrl += `&release_date.gte=${today}&sort_by=release_date.asc`;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;

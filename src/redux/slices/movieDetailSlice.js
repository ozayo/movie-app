// src/redux/slices/movieDetailSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching movie details
export const fetchMovieDetail = createAsyncThunk(
  'movieDetail/fetchMovieDetail',
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    return data;
  }
);

const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState: {
    movie: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movie = action.payload;
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieDetailSlice.reducer;

// src/api.js
export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`
  );
  const data = await response.json();
  return data.results;
};

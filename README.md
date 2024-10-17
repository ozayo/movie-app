# Movie App

This is a movie listing web application built with React, Redux Toolkit, and The Movie Database (TMDb) API. It allows users to browse popular, top-rated, and upcoming movies, as well as view details for each movie and manage a personal list of favorite movies.

## Live Demo

Check out the live version of the app: [Movie App](https://movie-app-sage-six.vercel.app/)

## Features

- **Popular Movies**: Browse the most popular movies currently trending.
- **Top-Rated Movies**: Explore the top-rated movies.
- **Upcoming Movies**: View movies that are soon to be released.
- **Movie Search**: Search for movies by title.
- **Movie Details**: Get detailed information about a movie, including runtime, release date, and rating.
- **Favorite Movies**: Add or remove movies from your favorite list and view them in a dedicated section.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Redux Toolkit**: State management for handling movie data and favorites.
- **React Router**: Navigation between different pages (e.g., Home, Movies, Movie Details).
- **Tailwind CSS**: For styling the user interface.
- **TMDb API**: External API used to fetch movie data.
- **Vercel**: For deployment and hosting.

## Installation

To run the app locally, follow these steps:

- Clone the repository:

   ```bash
   git clone https://github.com/ozayo/movie-app.git
   ```

- Navigate to the project folder:
```bash 
cd movie-App
```
- Create a .env file in the project root and add your TMDb API key:
```bash  
VITE_API_KEY=your_tmdb_api_key_here 
```

- Start the development server:

```bash 
npm run dev
```

- Open your browser and go to http://localhost:5173 to view the app.
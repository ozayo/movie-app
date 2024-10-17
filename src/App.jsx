// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies'; // Movies (index) varsayılan olarak popular filmleri gösterecek
import TopRatedMovies from './pages/Movies/TopRatedMovies';
import UpcomingMovies from './pages/Movies/UpcomingMovies';
import TVShows from './pages/TVShows';
import { Provider } from 'react-redux'; // Redux Provider'ı ekliyoruz
import { store } from './redux/store';  // Store'u import ediyoruz
import Footer from './components/Footer';
import Header from './components/Header';
import MovieDetail from './pages/MovieDetail'; // MovieDetail bileşenini ekliyoruz
import FavoriteMovies from './pages/FavoriteMovies'; // Favori filmler sayfasını ekliyoruz

const App = () => {
  return (
    <Provider store={store}> {/* Redux store'u tüm uygulamaya sağlıyoruz */}
      <Router>
        <div>
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />  {/* Popular filmler */}
              <Route path="/movies/top-rated" element={<TopRatedMovies />} />
              <Route path="/movies/upcoming" element={<UpcomingMovies />} />
              <Route path="/tvshows/*" element={<TVShows />} />
              <Route path="/movies/:id" element={<MovieDetail />} /> {/* Detay sayfası */}
              <Route path="/favorites" element={<FavoriteMovies />} /> {/* Favori Filmler sayfası */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
